import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { Box } from "@chakra-ui/react";
import { min } from "moment";

export const Support = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_07fgtb9",
        "template_i2s5vdk",
        form.current,
        "yHl4W1b5u_R3mjUXa"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box
      boxSizing="border-box"
      mt="3rem"
      mb="3rem"
      pl={{ lg: "18%", base: "0%" }}
      h="auto"
    >
      <StyledContactForm>
        <p className="title">
          Have a question or just want to know more? Feel free to reach out to
          us
        </p>
        <form ref={form} onSubmit={sendEmail}>
          <label style={{ color: "white" }}>Name</label>
          <input type="text" name="user_name" />
          <label style={{ color: "white" }}>Email</label>
          <input type="email" name="user_email" />
          <label style={{ color: "white" }}>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
          <p style={{ color: "gray", marginTop: "2rem" }}>
            * You will recieve response within 24 hours of time of submit{" "}
          </p>
        </form>
      </StyledContactForm>
    </Box>
  );
};

// styles

const StyledContactForm = styled.div`
  form {
    width: 400px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
  .title {
    // text-transform: uppercase;
    letter-spacing: 0.2rem;
    word-spacing: 0.5rem;
    margin: 2rem 0 0.5rem 0;
    font-size: 2.5rem;
    font-weight: 500;
    color: white;
    text-shadow: 0.5rem 0.5rem 0.5rem rgba(21, 2, 2, 0.4);
  }
`;
