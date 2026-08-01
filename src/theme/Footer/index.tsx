import React from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';

type FooterLink = {label?: string; to?: string; href?: string};

/**
 * Replaces Infima's two-column footer with the chaosfoundry.digital layout:
 * the Pax Chaosica block on one side, social pills on the other.
 * Links are still read from themeConfig.footer so there is one source of truth.
 */
export default function Footer(): React.JSX.Element | null {
  const {footer} = useThemeConfig();

  if (!footer) {
    return null;
  }

  const links: FooterLink[] = (footer.links ?? []).flatMap((group) =>
    'items' in group ? (group.items as FooterLink[]) : [],
  );

  return (
    <footer className="cf-footer">
      <div className="container">
        <div className="cf-footer__row">
          <div className="cf-footer__pax">
            <h3 className="cf-footer__motto">Pax Chaosica Et Gloria Infinitum</h3>
            <div className="cf-footer__meta">
              <span>Est. 2020</span>
              <span className="cf-footer__dot">·</span>
              <span>The Chaos Foundry</span>
              <span className="cf-footer__dot">·</span>
              <span>All Realities Reserved</span>
            </div>
          </div>

          <div className="cf-footer__pills">
            {links.map((link) => (
              <Link
                key={link.label}
                className="cf-pill"
                to={link.to}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
