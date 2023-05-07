import { useState } from "react";
import {
  Steps,
  Button,
  ConfigProvider,
  Card,
  Form,
  Checkbox,
  Col,
  Row,
  Input,
} from "antd";
import Collapse from "react-bootstrap/Collapse";
// import AdoptForm from "../AdoptForm";
import {
  DefaultText,
  Container,
  Title,
  SmallTitle,
  Separator,
  DefaultButton,
  ContainerNewButton,
} from "./styles";
import Register from "../Register";
//import { Modal } from "react-bootstrap";

const { Step } = Steps;

export default function AdoptStep({ isOpen, handleClick }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [formData, setFormData] = useState(null);
  const [form] = Form.useForm();

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // const nextStep = () => {
  //   form.validateFields().then(() => {
  //     setCurrentStep(currentStep + 1);
  //     if (currentStep === 1) {
  //       adoptFormRef.current.handleFinish();
  //     } else {
  //       setCurrentStep(currentStep + 1);
  //     }
  //   });
  // };

  const nextStep = (values) => {
    setCurrentStep((currentStep) => currentStep + 1);
    setFormData(values);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const steps = [
    {
      title: "Aviso",
      content: (
        <>
          <Title>Atenção aviso importante!!</Title>
          <Container>
            <DefaultText style={{}}>
              Olá! Você está prestes a ganhar um novo companheiro, mas é
              importante estar ciente das responsabilidades que vêm junto com um
              novo animal de estimação. Adotar um cão requer dedicação e
              comprometimento, mas também pode ser uma experiência gratificante
              e enriquecedora para toda a família.
            </DefaultText>
            <b />
            <DefaultText>
              Para começar, certifique-se de que está preparado para cuidar de
              um cão. Eles precisam de alimentação, cuidados de saúde, exercício
              físico e atenção diária. Também é importante pesquisar a raça do
              cão para entender suas necessidades específicas.
            </DefaultText>
            <b />
            <DefaultText>
              Quando for adotar um cão, escolha um que seja adequado ao seu
              estilo de vida e espaço disponível. Certifique-se de que sua casa
              é um ambiente seguro para o animal e providencie itens essenciais
              como brinquedos, camas e outros acessórios para garantir o
              conforto do seu novo amigo de quatro patas.
            </DefaultText>
            <DefaultText>
              Quando for adotar um cão, escolha um que seja adequado ao seu
              estilo de vida e espaço disponível. Certifique-se de que sua casa
              é um ambiente seguro para o animal e providencie itens essenciais
              como brinquedos, camas e outros acessórios para garantir o
              conforto do seu novo amigo de quatro patas.
            </DefaultText>
            <DefaultText>
              Se você estiver disposto a assumir essa responsabilidade, adotar
              um cão pode ser uma experiência gratificante e enriquecedora para
              toda a família. Mas lembre-se sempre de cuidar bem do seu novo
              amigo de quatro patas e proporcionar a ele uma vida feliz e
              saudável.
            </DefaultText>

            <Checkbox onChange={(e) => setIsCheckboxChecked(e.target.checked)}>
              Li e estou ciente das minhas novas resposabilidade.
            </Checkbox>
          </Container>
        </>
      ),
    },
    {
      title: "Cadastro",
      content: (
        // <AdoptForm
        //   currentStep={currentStep}
        //   onNext={nextStep}
        //   onFinish={setFormData}
        // />
        //"texto texto texto",
        <Container>
          <Row>
            <Col span={12}>
              <SmallTitle>Por que pedimos um cadastro?</SmallTitle>
              <DefaultText>
                Realizar o cadastro no site de adoção de cachorro é fundamental
                para garantir a segurança e o bem-estar do animal que será
                adotado. Com as informações fornecidas no cadastro, é possível
                selecionar um cão que se adapte ao perfil do adotante e que
                tenha maiores chances de se adaptar bem ao novo lar.
                <br />
                <br />
                Além disso, o cadastro permite que a equipe de adoção verifique
                as informações do adotante, garantindo que o animal seja
                entregue a uma pessoa responsável e comprometida com seu
                bem-estar. Não deixe de fazer o cadastro e contribua para a
                construção de um mundo mais justo e amoroso para nossos amigos
                de quatro patas.
              </DefaultText>
            </Col>
            <Col span={12}>
              <Separator>
                <Card>
                  <SmallTitle>Faça seu login</SmallTitle>
                  <DefaultText>
                    Se você já é um adotante registrado em nosso site, clique
                    aqui para acessar sua conta e continuar acompanhando os
                    cãezinhos disponíveis para adoção: Já sou cadastrado.
                  </DefaultText>
                  <ContainerNewButton>
                    <DefaultButton type="primary">
                      Já sou cadastrado
                    </DefaultButton>
                  </ContainerNewButton>

                  <DefaultText>
                    Se você está interessado em adotar um cãozinho, clique aqui
                    para se cadastrar e começar o processo de adoção:
                  </DefaultText>
                  <ContainerNewButton>
                    <DefaultButton onClick={handleClick}>
                      Cadastar
                    </DefaultButton>
                  </ContainerNewButton>
                </Card>
              </Separator>
            </Col>
          </Row>
        </Container>
      ),
    },
    {
      title: "Verificação",
      content: (
        <Container>
          <DefaultText>
            Por favor, verifique o seu e-mail e insira o código de confirmação
            abaixo para podermos confirmar seus dados e prosseguir com o
            processo. Se você não recebeu o e-mail, por favor, verifique sua
            caixa de spam ou solicite o reenvio do e-mail de confirmação.
            Obrigado!
          </DefaultText>
          <Form
            layout="vertical"
            form={form}
            name="basic"
            initialValues={{
              remember: true,
            }}
          >
            <Row>
              <Col span={10}>
                <Form.Item
                  label="Codigo"
                  name="codigo"
                  rules={[
                    {
                      required: true,
                      message: "Por favor insira insira o codigo!",
                    },
                  ]}
                  style={{
                    display: "inline-block",
                    width: "calc(100% - 8px)",
                    margin: "0 8px",
                  }}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Container>
      ),
    },
    {
      title: "Parabens!",
      content: (
        <Container>
          <Title>
            O começo de uma bela amizade: parabéns pela adoção do seu novo
            melhor amigo
          </Title>
          <DefaultText>
            Parabéns pela sua escolha de adotar um cachorro! A equipe da Adopt
            fica feliz em saber que mais um cãozinho encontrará um lar amoroso e
            acolhedor.
            <br />
            Porém, gostaríamos de informar que ainda há uma última etapa para
            finalizar o processo de adoção.
            <br />
            Em breve, um membro da nossa equipe entrará em contato com você para
            agendar uma visita ao abrigo e finalizar a adoção.
            <br />
            Lembramos também que ao adotar um cachorro, você não apenas oferece
            um lar para um animal que precisa, mas também tira um cãozinho da
            fila de adoção e contribui para reduzir o número de animais
            abandonados nas ruas.
            <br />
            Agradecemos novamente pela sua escolha e pela sua contribuição na
            luta pela proteção e bem-estar dos animais. Seja bem-vindo à família
            Adopt!
          </DefaultText>
        </Container>
      ),
    },
  ];

  return (
    <Collapse in={isOpen}>
      <div id="example-collapse-text">
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
                {currentStep === 1 ? (
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Salvar e Próximo
                    </Button>
                  </Form.Item>
                ) : (
                  <Form.Item>
                    <Button
                      type="primary"
                      onClick={() => nextStep(formData)}
                      disabled={!isCheckboxChecked}
                    >
                      Próximo
                    </Button>
                  </Form.Item>
                )}
              </div>
            </div>
          </ConfigProvider>
        </Card>
      </div>
    </Collapse>
  );
}
