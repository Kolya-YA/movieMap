import { tmdbImageApi } from "../../utils/axiosInstances.js";
import fs from "node:fs";
import path from "node:path";

const cacheDir = "imgCache";
const cacheMaxSize = 50 * 1024 * 1024; // 50MB

const getImgProxy = async (req, res, next) => {
	const { width, filename } = req.params;

	const imgPath = path.join(cacheDir, width, filename);
	fs.mkdirSync(path.dirname(imgPath), { recursive: true });
	// console.log(imgPath);

	if (fs.existsSync(imgPath)) {
		res.sendFile(imgPath, { root: "." });
		return;
	}

	try {
		const remoteURL = `${width}/${filename}`;
		const imgWriter = fs.createWriteStream(imgPath);
        // console.log("rurl", remoteURL)
		const remoteImgStream = await tmdbImageApi.get(remoteURL);

		remoteImgStream.data.pipe(imgWriter);

		await new Promise((resolve, reject) => {
			imgWriter.on("finish", resolve);
			imgWriter.on("error", reject);
		});

		res.sendFile(imgPath, { root: "." });
		cleanImgCache();
	} catch (error) {
		next(error);
	}
};

export default getImgProxy;

async function cleanImgCache() {
	try {
		const cacheFiles = await readdirRecursive(cacheDir);
		const cacheFilesStats = await Promise.all(
			cacheFiles.map(async (file) => {
				const stats = await fs.promises.stat(file);
				return {
					name: file,
					atime: stats.atime,
					size: stats.size,
				};
			}),
		);
		const cacheSize = cacheFilesStats.reduce((acc, file) => acc + file.size, 0);
		if (cacheSize > cacheMaxSize) {
			console.log("Clean cache");
			const oldestFiles = cacheFilesStats.sort((a, b) => a.atime - b.atime);
			let deletedSize = 0;
			for (const file of oldestFiles) {
				await fs.promises.unlink(file.name);
				deletedSize += file.size;
				if (deletedSize > cacheMaxSize * 0.1) {
					break;
				}
			}
			const newCacheSize = cacheSize - deletedSize;
			console.log(
				`New cache size: ${(newCacheSize / 1024 / 1024).toFixed(2)}MB`,
			);
		}
	} catch (error) {
		console.error("Error cleaning image cache:", error);
	}
}

async function readdirRecursive(dirPath) {
	const files = await fs.promises.readdir(dirPath);
	let allFiles = [];

	for (const file of files) {
		const filePath = path.join(dirPath, file);
		const stats = await fs.promises.stat(filePath);

		if (stats.isDirectory()) {
			const subFiles = await readdirRecursive(filePath);
			allFiles = allFiles.concat(subFiles);
		} else {
			allFiles.push(filePath);
		}
	}

	return allFiles;
}
