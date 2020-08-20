import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { ContentContainer, Container } from "../../components/containers/index";
import { Text } from "../../components/Text/index";
import { useHistory } from "react-router-dom";
import FormField from "./components/FormField/index";
import useForm from "../../hooks/useForm/index";

function Contact() {
  const history = useHistory();

  const { value, onChangeHandler } = useForm({
    name: "",
    email: "",
    message: "",
  });

  return (
    <Layout>
      <Text>
        <h1>Entre em contato comigo</h1>
      </Text>
      <ContentContainer>
        <form>
          <FormField
            label="Nome"
            type="text"
            name="name"
            value={value.name}
            onChange={onChangeHandler}
          />
          <FormField
            label="Email"
            type="text"
            name="email"
            value={value.email}
            onChange={onChangeHandler}
          />
          <FormField
            label="Mensagem"
            type="textarea"
            name="message"
            value={value.message}
            onChange={onChangeHandler}
          />
          <input
            className="submitBtn"
            type="submit"
            value="Enviar"
            onSubmit={history.push("/")}
          />
        </form>
      </ContentContainer>
    </Layout>
  );
}

export default Contact;
