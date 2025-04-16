'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import styles from './PageLoader.module.css';

export default function PageLoader() {
  const pathname = usePathname();
  const { status } = useSession(); // 👈 Checks auth loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'loading') {
      setLoading(true); // Stay loading
      return;
    }

    // If session is ready, give a moment to finalize route
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500); // adjust if needed

    return () => clearTimeout(timeout);
  }, [pathname, status]);

  if (!loading) return null;

  return (
    <div className={styles.loaderOverlay}>
      <div className={styles.loader}></div>
    </div>
  );
}
