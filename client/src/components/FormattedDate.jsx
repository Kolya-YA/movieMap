import React from 'react';

const FormattedDate = ({ isoDate }) => {
    const formatDate = dateString => {
        const date = new Date(dateString);
        const day = date.getUTCDate().toString().padStart(2, '0');
        const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
        const year = date.getUTCFullYear();

        return `${day}. ${month}. ${year}`;
    };

    return <span>{formatDate(isoDate)}</span>;
};

export default FormattedDate;
