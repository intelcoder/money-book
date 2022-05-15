import { KeyboardAvoidingView, View } from 'react-native'
import { Block, Button, Input, Text } from '@atoms'
import { Controller, useForm } from 'react-hook-form'

export default function ExpenseForm() {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm()

  function onSubmit(a) {
    console.log(a)
  }
  return (
    <KeyboardAvoidingView>
      <Block>
        <Text>Date</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              underline
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="date"
          rules={{ required: true }}
        />
      </Block>
      <Block>
        <Text>Cagegory</Text>
        <Input underline />
      </Block>
      <Block>
        <Text>Amount</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              underline
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              keyboardType="numeric"
            />
          )}
          name="amount"
          rules={{ required: true }}
        />
      </Block>
      <Block>
        <Text>Note</Text>
        <Input underline />
      </Block>
      <Block>
        <Button bgColor="yellow" roundCorner onPress={handleSubmit(onSubmit)}>
          <Text>Save</Text>
        </Button>
      </Block>
    </KeyboardAvoidingView>
  )
}
