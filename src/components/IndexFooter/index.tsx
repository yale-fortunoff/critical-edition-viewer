import React from 'react';
import styles from './IndexFooter.module.css';

interface FooterProps {
  parentOrgName?: string;
  orgName: string;
  orgURL: string;
}

IndexFooter.defaultProps = {
  parentOrgName: undefined,
};

export default function IndexFooter(props: FooterProps) {
  const { orgName, orgURL, parentOrgName } = props;

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logoSection}>
          <div className={styles.logoGroup}>
            <img
              className={styles.parentLogo}
              alt={`${parentOrgName} logo`}
              src="/img/parent-logo.svg"
            />
            <a href={orgURL} className={styles.orgLogoLink}>
              <img
                className={styles.orgLogo}
                alt={`${orgName} logo`}
                src="/img/org-logo.svg"
              />
            </a>
          </div>
          <div className={styles.dhlab}>
            An experiment of the{' '}
            <a href="https://dhlab.yale.edu">
              Yale Digital Humanities Laboratory
            </a>
            <br />
            <br />
            With Assistance from the Conference on Jewish Material Claims
            Against Germany Supported by the Foundation Remembrance,
            Responsibility and Future and by the German Federal Ministry of
            Finance
          </div>
        </div>
        <div className={styles.acknowledgementWrapper}>
          <img
            className={styles.acknowledgements}
            alt="Acknowledgements logos"
            src="/img/Logobar_Holocausteducation_quer.svg"
          />
        </div>
      </div>
    </footer>
  );
}
