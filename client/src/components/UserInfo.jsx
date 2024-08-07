import { Link } from 'react-router-dom';
import { FormattedDate } from '../components';

const UserInfo = ({ user }) => {
    return (
        <div className=" font-playfair max-w-md mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6 mt-10">
            <div className="space-y-3 text-gray-300">
                <p>
                    <span className="font-semibold">Id:</span> {user.id}
                </p>
                <p>
                    <span className="font-semibold">Email:</span> {user.email}
                </p>
                <p>
                    <span className="font-semibold">Admin:</span> {user.isAdmin ? 'Yes' : 'No'}
                </p>
                <p>
                    <span className="font-semibold">Birth:</span> <FormattedDate isoDate={user.birthYear} />
                </p>
                <p>
                    <span className="font-semibold">Created at:</span> <FormattedDate isoDate={user.createdAt} />
                </p>
            </div>
            <div className="mt-6 space-y-3">
                <Link to="/waiting-list" className="block w-full">
                    <button className="w-full inline-block py-2 px-4 text-center text-main-text bg-black/70 rounded-md border border-white border-opacity-70 shadow-diffused transition duration-800 hover:bg-gray-900 hover:border-gray-600 hover:bg-opacity-100 disabled:text-gray-600">
                        Watch List
                    </button>
                </Link>
                <Link to="/history-list" className="block w-full">
                    <button className="w-full inline-block py-2 px-4 text-center text-main-text bg-black/70 rounded-md border border-white border-opacity-70 shadow-diffused transition duration-800 hover:bg-gray-900 hover:border-gray-600 hover:bg-opacity-100 disabled:text-gray-600">
                        History List
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default UserInfo;
