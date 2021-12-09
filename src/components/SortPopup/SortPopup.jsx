import React from 'react';
import styles from './SortPopup.module.css'

const SortPopup = ({open, children}) => {
    if (!open) return null
    return (
        <div>
            {children}
        </div>
    );
};

export default SortPopup;