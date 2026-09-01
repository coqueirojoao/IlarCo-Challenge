import { StyleSheet, View } from 'react-native';
import {
  Button,
  HelperText,
  Modal,
  Portal,
  Text,
  TextInput,
} from 'react-native-paper';

import { colors } from '../theme/colors';
import type { MealFormErrors, MealFormValues } from '../types/nutrition';

interface AddMealModalProps {
  errors: MealFormErrors;
  onChange: <Field extends keyof MealFormValues>(
    field: Field,
    value: MealFormValues[Field],
  ) => void;
  onDismiss: () => void;
  onSubmit: () => void;
  values: MealFormValues;
  visible: boolean;
}

export function AddMealModal({
  errors,
  onChange,
  onDismiss,
  onSubmit,
  values,
  visible,
}: AddMealModalProps) {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={styles.modal}
      >
        <Text variant="titleLarge" style={styles.title}>
          Add Meal
        </Text>

        <TextInput
          label="Meal name"
          mode="outlined"
          value={values.title}
          onChangeText={(value) => onChange('title', value)}
          style={styles.input}
          error={Boolean(errors.title)}
        />
        <HelperText type="error" visible={Boolean(errors.title)}>
          {errors.title}
        </HelperText>

        <TextInput
          label="Items"
          mode="outlined"
          value={values.items}
          onChangeText={(value) => onChange('items', value)}
          style={styles.input}
          error={Boolean(errors.items)}
          multiline
        />
        <HelperText type="error" visible={Boolean(errors.items)}>
          {errors.items}
        </HelperText>

        <TextInput
          label="Calories"
          mode="outlined"
          value={values.calories}
          onChangeText={(value) => onChange('calories', value.replace(/[^0-9]/g, ''))}
          keyboardType="number-pad"
          style={styles.input}
          error={Boolean(errors.calories)}
        />
        <HelperText type="error" visible={Boolean(errors.calories)}>
          {errors.calories}
        </HelperText>

        <View style={styles.actions}>
          <Button mode="text" textColor={colors.textMuted} onPress={onDismiss}>
            Cancel
          </Button>
          <Button mode="contained" buttonColor={colors.primary} onPress={onSubmit}>
            Save Meal
          </Button>
        </View>
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  modal: {
    alignSelf: 'center',
    backgroundColor: colors.surface,
    borderRadius: 8,
    maxWidth: 420,
    padding: 20,
    width: '88%',
  },
  title: {
    color: colors.text,
    fontWeight: '700',
    marginBottom: 18,
  },
  input: {
    backgroundColor: colors.surface,
  },
  actions: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'flex-end',
    marginTop: 10,
  },
});
