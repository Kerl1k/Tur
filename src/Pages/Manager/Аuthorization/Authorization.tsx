import { Field, Form, Formik, ErrorMessage } from "formik";
import React, { useMemo, useState } from "react";
import * as Yup from "yup";
import { isLogginApi, loginManagerApi } from "../../../services/TourService";
import { useNavigate } from "react-router-dom";

const Authorization = () => {
  const nav = useNavigate();
  const [authorization, setAutorization] = useState({
    login: "",
    password: "",
  });
  const { data: login } =
    loginManagerApi.useFetchLoginManagerQuery(authorization);
  const [Isloggin, {}] = isLogginApi.useChangeIsLogginMutation();
  const initialValues = {
    login: "",
    password: "",
  };
  const QWE = useMemo(() => {
    if (login?.length === 1) {
      Isloggin({ isLoggin: true, manager: login[0] });
      nav("/");
    }
  }, [login]);

  function onSubmit(values: any) {
    setAutorization(values);
  }
  const validationSchema = Yup.object({
    login: Yup.string().required("Логин не введен"),
    password: Yup.string().required("Пароль не введен"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            <div>
              <Field name="login" placeholder="login" />
              <div className="error">
                <ErrorMessage name="login" component="span" />
              </div>
              <Field name="password" type="password" placeholder="password" />
              <div className="error">
                <ErrorMessage name="password" component="span" />
              </div>
              <button type="submit">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Authorization;
function nav(arg0: string): any {
  throw new Error("Function not implemented.");
}
