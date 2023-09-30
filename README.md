# Funcionalidades Principais:

**Formulário de Registro:** Os usuários podem se cadastrar fornecendo um nome de usuário, um endereço de e-mail válido e uma senha. As senhas são armazenadas de forma segura após a criptografia.

**Formulário de Login:** Os usuários registrados podem fazer login usando seu nome de usuário e senha. O sistema verifica as credenciais fornecidas e concede acesso se as informações estiverem corretas.

**Redirecionamento:** Após o login bem-sucedido, os usuários são redirecionados para uma área restrita da aplicação, onde podem acessar recursos exclusivos.

**Recuperação de Senha:** Os usuários podem solicitar a recuperação de senha por e-mail em caso de esquecimento da senha. Um link de redefinição de senha é enviado para o endereço de e-mail registrado.

**Proteção de Rotas:** As rotas que requerem autenticação são protegidas e não podem ser acessadas sem fazer login. O React Router é usado para gerenciar a proteção de rotas.
