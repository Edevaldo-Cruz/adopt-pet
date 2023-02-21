import { Form, Input, DatePicker, InputNumber, Button } from "antd";

const { RangePicker } = DatePicker;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const FormComponent = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      {...layout}
      form={form}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Nome completo"
        name="nomeCompleto"
        rules={[
          {
            required: true,
            message: "Por favor insira seu nome completo!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="E-mail"
        name="email"
        rules={[
          {
            required: true,
            message: "Por favor insira seu e-mail!",
          },
          {
            type: "email",
            message: "Por favor insira um e-mail válido!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Data de nascimento"
        name="dataNascimento"
        rules={[
          {
            required: true,
            message: "Por favor insira sua data de nascimento!",
          },
        ]}
      >
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        label="Telefone"
        name="telefone"
        rules={[
          {
            required: true,
            message: "Por favor insira seu telefone!",
          },
        ]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        label="Endereço"
        name="endereco"
        rules={[
          {
            required: true,
            message: "Por favor insira seu endereço!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Complemento" name="complemento">
        <Input />
      </Form.Item>

      <Form.Item
        label="CEP"
        name="cep"
        rules={[
          {
            required: true,
            message: "Por favor insira seu CEP!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Cidade"
        name="cidade"
        rules={[
          {
            required: true,
            message: "Por favor insira sua cidade!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Estado"
        name="estado"
        rules={[
          {
            required: true,
            message: "Por favor insira seu estado!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormComponent;
