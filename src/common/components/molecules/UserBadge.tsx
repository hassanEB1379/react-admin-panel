import React, { FC } from 'react';
import Avatar from '../atoms/Avatar';

type TUserBadge = {
    username: string;
    desc: string;
    avatarSrc: string;
};

const UserBadge: FC<TUserBadge> = ({ username, desc, avatarSrc }) => {
    return (
        <div className="is-flex">
            <Avatar src={avatarSrc} size="normal" />

            <span className="ml-4">
                <p className="has-text-weight-medium">{username}</p>
                <p className="has-text-grey">{desc}</p>
            </span>
        </div>
    );
};

export default UserBadge;
