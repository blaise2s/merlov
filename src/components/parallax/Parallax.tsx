import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core';

import styles from './Parallax.module.scss';

export interface ParallaxProps {
  height: string;
  imgSrc: string;
}

const Parallax: React.FC<ParallaxProps> = props => {
  const useStyles = makeStyles(() =>
    createStyles({
      parallax: {
        backgroundImage: `url(${props.imgSrc})`,
        height: `${props.height}`
      }
    })
  );

  return (
    <div className={`${useStyles().parallax} ${styles.parallax}`}>
      {props.children}
    </div>
  );
};

export default Parallax;
