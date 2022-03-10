import React, { FC } from 'react';

type TIcon = {
    name: string;
};

const Icon: FC<TIcon> = ({ name }) => {
    return (
        <span className="icon">
            <i className={`fas ${name}`} />
        </span>
    );
};

export default Icon;
