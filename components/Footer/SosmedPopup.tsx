import { Popover, Button } from '@mantine/core';
import React, { useMemo, useState } from 'react';
import styles from './Footer.module.scss';

export const SosmedPopup = () => {
    const [opened, setOpened] = useState(false);
    const contactItems = useMemo(() => [
        {
            icon: 'ig',
            href: 'mailto:contact@logee.id',
        },
        {
            icon: 'whatsapp',
            href: 'https://wa.me/6281212121212',
        },
    ], []);
    return <Popover
        opened={opened}
        onClose={() => setOpened(false)}
        target={<Button variant="subtle" onClick={() => setOpened((o) => !o)}>Media Sosial</Button>}
        width={260}
        position="bottom"
        withArrow
    >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {contactItems.map(({ icon, href }) => (
                <Button key={icon} className={styles.contactItem}>
                    <i className={`fa fa-${icon}`} />
                    {icon}
                </Button>
            ))}
        </div>
    </Popover>;
};
