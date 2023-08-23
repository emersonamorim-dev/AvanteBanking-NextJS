const loginResolver = {
    Mutation: {
      storeLogin: (_, { cpf }) => {
        // Verifique se o CPF já está no "banco de dados".
        if (cpfDatabase.includes(cpf)) {
          return {
            success: false,
            message: "CPF já está armazenado."
          };
        }
  
        // Adicione o CPF ao "banco de dados".
        cpfDatabase.push(cpf);
  
        return {
          success: true,
          message: "CPF armazenado com sucesso!"
        };
      }
    }
  };
  
  export default loginResolver;

  