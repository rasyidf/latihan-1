import { TextInput, Group, Button, Textarea } from '@mantine/core';
import { useMediaQuery, useForm } from '@mantine/hooks';

function Feedback({ initialValues, onSubmit, onCancel }: UserEditFormProps) {
    const isMobile = useMediaQuery('(max-width: 755px');

    const form = useForm({
        initialValues,
        validationRules: {
            name: (value) => value.trim().length > 2,
            email: (value) => value.trim().length > 2,
        },
    });

    return (
        <form onSubmit={form.onSubmit(onSubmit)}>
            <TextInput
              required
              label="Nama"
              placeholder="Tuliskan nama anda"
              style={{ minWidth: isMobile ? 220 : 300 }}
              value={form.values.name}
              onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
              error={form.errors.name}
              variant="default"
            />

            <TextInput
              required
              label="Nomor Telepon"
              placeholder="Tuliskan nomor handphone"
              style={{ minWidth: isMobile ? 220 : 300, marginTop: 15 }}
              value={form.values.phone}
              onChange={(event) => form.setFieldValue('phone', event.currentTarget.value)}
              error={form.errors.phone}
              variant="default"
            />
            <Textarea
              required
              label="Feedback"
              placeholder="Tuliskan feedback anda"
              style={{ minWidth: isMobile ? 220 : 300 }}
              value={form.values.feedback}
              onChange={(event) => form.setFieldValue('feedback', event.currentTarget.value)}
              error={form.errors.feedback}
              variant="default"
            />

            <Group position="apart" style={{ marginTop: 15 }}>
                <Button fullWidth type="submit" size="sm">
                    Submit
                </Button>
            </Group>
        </form>
    );
}

export default Feedback;
