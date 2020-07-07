# Recuperação de senha

**RF**

- O usuário deve poder recuperar sua senha informando o seu email;
- O usuário deve receber um e-mail com intruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar mailtrap para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em produção;
- O envio de emails deve acontecer em segundo plano (background job);/

**RN**

- O link enviado por email para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização do perfil

**RF**

- O usuário deve pdoer atualizar seu nome, email e senha;

**RNF**

**RN**

- O usuário nao pode alterar seu email para um email ja utilizado;
- Para atualizar sua senha, o usuario deve informar a senha antiga;
- Para atualizar sua senha, o usuario deve confirmar sua senha;

# Painel do prestador

**RF**

- O usuário deve pdoer listar seus agendamentos de um dia especifico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestadoor deve poder visualizar as notificações nao lidas

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo real utilizando Socket.io;

**RN**

- A notificação deve ter um status de lida ou nao lida para que o prestador possa controlar

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mes pelo menos um horario disponivel de um prestador
- O usuario deve poder listar horarios disponiveis em um dia especifico de um prestador;
- O usuario deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**
- cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponievis entre 8h às 18h (Primeiro as 8h, ultimo as 17h);
- O usuario nao pode agendar em um horario ja ocupado;
- O usuario nao pode agendar em um horario que aj passou;
- O usuario nao pode agendar serviços consigo mesmo;
-

Processo
1. Rotas e controllers
2. Repositório de tokens (TypeORM)
3. Criar migration de tokens
4. Provider de envio de e-mail (DEV)
5. Registrar providers no container
6. Testar tudo!
