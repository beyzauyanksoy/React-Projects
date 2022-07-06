import * as yup from 'yup';

let schema = yup.object().shape({
    firstName: yup.string().required('Bu alan zorunludur'),
    lastName: yup.string().required('Bu alan zorunludur'),
    email: yup.string().email('Geçerli bir e-mail adresi girin').required('Bu alan zorunludur'),
    message:yup.string().min(5,'Min 5 karakter giriniz').required('Bu alan zorunludur'),
   
    
  });
  export default schema;