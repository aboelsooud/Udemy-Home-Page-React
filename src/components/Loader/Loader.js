import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import styles from "./Loader.module.css"

function Loader() {
    return (
        <div className={styles.load}>
            <ClipLoader size={70} color={"#000000"} />
        </div>
    );
}

export default Loader