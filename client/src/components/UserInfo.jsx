import { Button, FormattedDate } from '../components';

const UserInfo = ({ user }) => {
    return (
        <div className="grid gap-3 max-w-md mx-auto bg-block-bg rounded-lg p-4">
            <p>
                <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p>
                <span className="font-semibold">Admin:</span> {user.isAdmin ? 'Yes' : 'No'}
            </p>
            <p>
                <span className="font-semibold">Birth year: </span>
                {new Date(user.birthYear).getFullYear()}
            </p>
            <p>
                <span className="font-semibold">Created at:</span> <FormattedDate isoDate={user.createdAt} />
            </p>
            <Button btnLink="/waiting-list" text="Watch List" />
            <Button btnLink="/history-list" text="History List" />
        </div>
    );
};

export default UserInfo;
