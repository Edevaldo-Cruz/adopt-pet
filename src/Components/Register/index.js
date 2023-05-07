import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form, Input, DatePicker, InputNumber, Row, Col } from "antd";
import ptBR from "antd/lib/locale/pt_BR";
import axios from "axios";

export default function Register({ handleCloseModal, show }) {
  const handleModalClose = () => handleCloseModal(false);
  const [form] = Form.useForm();

  const [endereco, setEndereco] = useState({});

  const onChangeCep = (e) => {
    const cep = e.target.value.replace(/[^0-9]/g, "");
    if (cep.length === 8) {
      buscarEndereco(cep);
    }
  };

  const buscarEndereco = (cep) => {
    axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        const { data } = response;
        setEndereco(data);

        //Pega todos os name referente ao endereço e substitui pelas informações vinda da API.
        form.setFieldsValue(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSave = async () => {
    try {
      const values = await form.validateFields();
      console.log(values);
      const response = await axios.post("https://localhost:7261/User", {
        name: values.Name,
        email: values.Email,
        telephone: values.Telephone,
        address: values.Address,
        dateOfBirth: values.DateOfBirth,
      });
      console.log(response);
      handleModalClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal id="modal" show={show} onHide={handleModalClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Cadastro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                  label="Nome completo"
                  name="Name"
                  rules={[
                    {
                      required: true,
                      message: "Por favor insira seu nome completo!",
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
              <Col span={10}>
                <Form.Item
                  label="E-mail"
                  name="Email"
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
                  style={{
                    display: "inline-block",
                    width: "calc(100% - 8px)",
                    margin: "0 8px",
                  }}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={4}>
                <Form.Item
                  label="Data de nascimento"
                  name="DateOfBirth"
                  rules={[
                    {
                      required: true,
                      message: "Por favor insira sua data de nascimento!",
                    },
                  ]}
                  style={{
                    display: "inline-block",
                    width: "calc(100% - 8px)",
                    margin: "0 8px",
                  }}
                >
                  <DatePicker
                    locale={ptBR}
                    format="DD/MM/YYYY"
                    style={{ width: "100%", zIndex: "1500" }}
                    getPopupContainer={() => document.getElementById("modal")}
                  />
                </Form.Item>
              </Col>
              <Col span={4}>
                <Form.Item
                  label="CEP"
                  name="cep"
                  rules={[
                    {
                      required: true,
                      message: "Por favor insira seu CEP!",
                    },
                  ]}
                  style={{
                    display: "inline-block",
                    width: "calc(100% - 8px)",
                    margin: "0 8px",
                  }}
                >
                  <Input onChange={onChangeCep} />
                </Form.Item>
              </Col>
              <Col span={20}>
                <Form.Item
                  label="Endereço"
                  name="logradouro"
                  rules={[
                    {
                      required: true,
                      message: "Por favor insira seu endereço!",
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
              <Col span={8}>
                <Form.Item
                  label="Bairro"
                  name="bairro"
                  rules={[
                    {
                      required: true,
                      message: "Por favor insira sua cidade!",
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
              <Col span={10}>
                <Form.Item
                  label="Cidade"
                  name="localidade"
                  rules={[
                    {
                      required: true,
                      message: "Por favor insira sua cidade!",
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
              <Col span={6}>
                <Form.Item
                  label="Estado"
                  name="uf"
                  rules={[
                    {
                      required: true,
                      message: "Por favor insira seu estado!",
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
              <Col span={18}>
                <Form.Item
                  label="Complemento"
                  name="complement"
                  rules={[
                    {
                      required: true,
                      message: "Por favor insira sua cidade!",
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

              <Col span={6}>
                <Form.Item
                  label="Telefone"
                  name="Telephone"
                  rules={[
                    {
                      required: true,
                      message: "Por favor insira seu telefone!",
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
