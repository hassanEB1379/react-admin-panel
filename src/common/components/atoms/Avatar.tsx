import React, { FC } from 'react';
import clsx from 'clsx';

type TAvatar = {
    src: string;
    size: 'small' | 'normal' | 'large';
};

const Avatar: FC<TAvatar> = ({ src, size = 'normal' }) => {
    const classes = clsx('image', {
        'is-32x32': size === 'small',
        'is-48x48': size === 'normal',
        'is-64x64': size === 'large',
    });

    return (
        <figure className={classes}>
            <img
                style={{ height: '100%', objectFit: 'cover' }}
                className="is-rounded"
                alt="avatar"
                src={src}
            />
        </figure>
    );
};

export default Avatar;
