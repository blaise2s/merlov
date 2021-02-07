import React, { FC } from 'react';
import { Button } from '@material-ui/core';

import styles from './Landing.module.scss';
import Parallax from '../parallax/Parallax';
import wine1 from '../../assets/images/wine-1.jpg';
import grapes2 from '../../assets/images/grapes-2.jpg';
import vineyard4 from '../../assets/images/vineyard-4.jpg';
import charcuterie1 from '../../assets/images/charcuterie-1.jpg';
import cheese1 from '../../assets/images/cheese-1.jpg';
import barrels1 from '../../assets/images/barrels-1.jpg';

const Landing: FC = () => {
  return (
    <div className={styles.landing}>
      <section className={styles.section}>
        <Parallax height="100vh" imgSrc={wine1}>
          <div className={styles.messageContainer}>
            {/* <div className={styles.message}>
              <Typography variant="h1">Merlov</Typography>
            </div> */}
            {/* <div> */}
            <Button
              size="large"
              variant="outlined"
              className={styles.contactUs}
              href="mailto:schaeffer.studio@gmail.com"
            >
              Contact Us
            </Button>
            {/* </div> */}
          </div>
        </Parallax>
      </section>
      <section className={styles.section}>
        <Parallax height="100vh" imgSrc={grapes2}>
          {/* <div className={styles.messageContainer}>
            <div className={styles.message}>
              <Typography variant="h2">Amazon Echo</Typography>
            </div>
          </div> */}
        </Parallax>
      </section>
      <section className={styles.section}>
        <Parallax height="100vh" imgSrc={vineyard4}>
          {/* <div className={styles.messageContainer}>
            <div className={styles.message}>
              <Typography variant="h2">Apple Home</Typography>
            </div>
          </div> */}
        </Parallax>
      </section>
      <section className={styles.section}>
        <Parallax height="100vh" imgSrc={charcuterie1}>
          {/* <div className={styles.messageContainer}>
            <div className={styles.message}>
              <Typography variant="h2">Nest Home</Typography>
            </div>
          </div> */}
        </Parallax>
      </section>
      <section className={styles.section}>
        <Parallax height="100vh" imgSrc={cheese1}>
          {/* <div className={styles.messageContainer}>
            <div className={styles.message}>
              <Typography variant="h2">And more!</Typography>
            </div>
          </div> */}
        </Parallax>
      </section>
      <section className={styles.section}>
        <Parallax height="100vh" imgSrc={barrels1}>
          {/* <div className={styles.messageContainer}>
            <Button
              size="large"
              variant="outlined"
              className={styles.contactUs}
              href="mailto:schaeffer.studio@gmail.com"
            >
              Contact Us
            </Button>
          </div> */}
        </Parallax>
      </section>
    </div>
  );
};

export default Landing;
