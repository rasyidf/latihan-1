import { Popover, Button } from '@mantine/core';
import React, { useState } from 'react';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import styles from './Footer.module.scss';

export const Feedback = () => {
    const [values, setValues] = useState({ name: 'Bob Handsome', phone: '088888555', feedback: '' });
    const [opened, setOpened] = useState(false);
    return <Popover
      opened={opened}
      onClose={() => setOpened(false)}
      position="bottom"
      placement="end"
      styles={{
            header: { backgroundColor: '#fff', padding: '0.5rem 1rem' },
        }}
      withArrow={false}
      transition="pop-top-right"
      target={<Button variant="subtle" onClick={() => setOpened((o) => !o)}>Feedback</Button>}
    >
        <div>
            Form Feedback
            <Button radius="xl">x</Button>
        </div>
        <FeedbackForm
          initialValues={values}
          onCancel={() => setOpened(false)}
          onSubmit={(data: any) => {
                setValues(data);
                setOpened(false);
            }}
        />
           </Popover>;
};
