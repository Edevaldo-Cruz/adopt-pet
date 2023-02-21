import { useState } from "react";
import {
  Steps,
  Button,
  ConfigProvider,
  Card,
  Form,
  Input,
  Checkbox,
  DatePicker,
  InputNumber,
} from "antd";

const { Step } = Steps;

export default function AdoptStep() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [form] = Form.useForm();

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

  const onFinish = (values) => {
    console.log(values);
  };

  const steps = [
    {
      title: "Aviso",
      content: (
        <>
          <h1 style={{ textAlign: "center" }}>Atenção aviso importante!!</h1>
          <div style={{ marginInline: "15%", marginBlock: "2%" }}>
            <p
              style={{
                fontSize: "20px",
                color: "#707070",
                textAlign: "justify",
              }}
            >
              Olá! Você está prestes a ganhar um novo companheiro, mas é
              importante estar ciente das responsabilidades que vêm junto com um
              novo animal de estimação. Adotar um cão requer dedicação e
              comprometimento, mas também pode ser uma experiência gratificante
              e enriquecedora para toda a família.
            </p>
            <b />
            <p
              style={{
                fontSize: "20px",
                color: "#707070",
                textAlign: "justify",
              }}
            >
              Para começar, certifique-se de que está preparado para cuidar de
              um cão. Eles precisam de alimentação, cuidados de saúde, exercício
              físico e atenção diária. Também é importante pesquisar a raça do
              cão para entender suas necessidades específicas.
            </p>
            <b />
            <p style={{ fontSize: "20px" }}>
              Quando for adotar um cão, escolha um que seja adequado ao seu
              estilo de vida e espaço disponível. Certifique-se de que sua casa
              é um ambiente seguro para o animal e providencie itens essenciais
              como brinquedos, camas e outros acessórios para garantir o
              conforto do seu novo amigo de quatro patas.
            </p>
            <p style={{ fontSize: "20px" }}>
              Quando for adotar um cão, escolha um que seja adequado ao seu
              estilo de vida e espaço disponível. Certifique-se de que sua casa
              é um ambiente seguro para o animal e providencie itens essenciais
              como brinquedos, camas e outros acessórios para garantir o
              conforto do seu novo amigo de quatro patas.
            </p>
            <p style={{ fontSize: "20px" }}>
              Se você estiver disposto a assumir essa responsabilidade, adotar
              um cão pode ser uma experiência gratificante e enriquecedora para
              toda a família. Mas lembre-se sempre de cuidar bem do seu novo
              amigo de quatro patas e proporcionar a ele uma vida feliz e
              saudável.
            </p>

            <Checkbox onChange={(e) => setIsCheckboxChecked(e.target.checked)}>
              Li e estou ciente das minhas novas resposabilidade.
            </Checkbox>
          </div>
        </>
      ),
    },
    {
      title: "Cadastro",
      content: (
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
      ),
    },
    {
      title: "Verificação",
      content: "This is the content of Step 3",
    },
    {
      title: "Parabens!",
      content: "This is the content of Step 3",
    },
  ];

  const nextStep = () => {
    form.validateFields().then(() => {
      setCurrentStep(currentStep + 1);
    });
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <Card
      style={{
        width: "100%",
        marginBottom: "5%",
      }}
    >
      <ConfigProvider
        theme={{
          components: {
            Steps: {
              colorPrimary: " #f7941d",
            },
            Button: {
              colorPrimary: " #f7941d",
            },
          },
        }}
      >
        <Steps current={currentStep}>
          {steps.map((step) => (
            <Step key={step.title} title={step.title} />
          ))}
        </Steps>
        <div style={{ margin: "50px 0" }}>
          <div>{steps[currentStep].content}</div>
          <div
            style={{
              display: "flex",
              marginTop: "5%",
              marginRight: "5%",
              justifyContent: "end",
            }}
          >
            {currentStep > 0 && (
              <Button style={{ marginRight: "10px" }} onClick={prevStep}>
                Anterior
              </Button>
            )}
            {currentStep < steps.length - 1 && (
              <Button
                type="primary"
                onClick={nextStep}
                disabled={!isCheckboxChecked}
              >
                Proximo
              </Button>
            )}
          </div>
        </div>
      </ConfigProvider>
    </Card>
  );
}
