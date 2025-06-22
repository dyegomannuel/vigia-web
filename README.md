## Descrição ℹ
O Vigia é um aplicativo mobile para envio de denúncias com geolocalização no Distrito Federal, pensado para promover segurança urbana e geração de dados a partir da participação cidadã. Ele permite que qualquer pessoa envie denúncias sobre desordens urbanas de forma rápida, utilizando a localização aproximada de onde está ou do evento denunciado, além de possuir um botão de alerta de insegurança para que autoridades próximas possam receber a mensagem e diminua o risco de assaltos e outros crimes. A plataforma é integrada com um sistema web de monitoramento de uso pelas autoridades, com os dados gerados no aplicaitvo, a plataforma é alimentada com essas denúncias de desordens urbanas e possibilita que a Polícia possa enviar diretamente a solicitação para o órgão responsável, mas para além disso, permite o monitoramento contínuo dessas entradas e gera dados para o modelo de IA preditiva que consegue mapear zonas de risco e demandas de policiamento, otimizando a gestão da polícia e mantendo a segurança do Distrito Federal com alta acurácia. 

### Repositórios da solução
- [Aplicativo mobile de engajamento cidadão para geração de dados](https://github.com/gabygraciano/app-denuncias)
- [Plataforma Web de monitoramento e prevenção](https://github.com/dyegomannuel/vigia-web)
- [Modelo de predição - Machine Learning](https://github.com/luislauriano/cidade-segura)


## Funcionalidades 📋
1. *Cadastro e login de usuários*
   - Autenticação integrada ao Supabase Auth.
   - Armazenamento seguro de usuários no banco.

2. *Envio de denúncias*
   - O usuário pode enviar uma descrição da ocorrência.
   - A denúncia é enviada junto com coordenadas de geolocalização.
   - As denúncias são salvas automaticamente no Supabase e integradas com o sistema de monitoramento.
  
3. *Botão de alerta de insegurança*
   - O usuário pode alertar as autoridades imediamente se sentir em situação de perigo eminente.

4. *Mapa com pontos de risco*
   - O usuário pode acessar um mapa que mostra áreas de alto, médio e pouco risco baseado em dados reais do sistema de monitoramento.

5. *Notificação de alertas*
   - O usuário recebe notificação de alerta caso estaja próxima á uma zona de alto risco.
     
6. *Gamificação*
   - O usuário recebe conquistas, medalhas e pontuações pelas denúncias de desordem urbana que ele envia pelo app, incentivando o engajamento cidadão no cuidado do Distrito Federal.

## Tech Stack ⚙

### Frontend
- ![React Native](https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- ![Expo](https://img.shields.io/badge/Expo-1C1E24?style=for-the-badge&logo=expo&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

#### Bibliotecas e APIs do Frontend
- *expo-location*: para obter a localização do usuário.  
- *@react-navigation/native*: para navegação por tabs e stack.  
- *@expo/vector-icons*: para ícones visuais.  
- *@supabase/supabase-js*: cliente de comunicação com o Supabase.

### Backend
- ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

#### Funcionalidades no Supabase
- **Tabela usuarios**: gerenciamento de usuários autenticados.
- **Tabela denuncias**: armazenamento das denúncias enviadas.
- *Auth integrada*: autenticação segura e escalável.
- *Row Level Security desabilitada* para ambiente de teste.

## Equipe 🏆

*Gabriella Graciano de Souza*  
📧 E-mail: [gabifc_graciano@hotmail.com](mailto:gabifc_graciano@hotmail.com)  
🖋 Behance: [behance.net/gabygraciano](https://www.behance.net/gabygraciano)  
🌐 GitHub: [github.com/gabygraciano](https://github.com/gabygraciano)

*Dyego Mannuel Domingos de Melo*  
📧 E-mail: [dyegodomingos@gmail.com](mailto:dyegodomingos@gmail.com)  
🌐 GitHub: [https://github.com/dyegomannuel](https://github.com/dyegomannuel)

*Leonardo Seabra*  
📧 E-mail: [leoseabrasz@gmail.com](mailto:leoseabrasz@gmail.com)  
🖋 Behance: [behance.net/leoseabra2](https://www.behance.net/leoseabra2)  

*Wictor Mannuel Domingos de Melo*  
📧 E-mail: [wictormannuel@gmail.com](mailto:wictormannuel@gmail.com)  
🌐 GitHub: [github.com/Wictor0](https://github.com/Wictor0)

*Luís Vinicius Lauriano de França*  
📧 E-mail: [luislauriano@outlook.com.br](mailto:luislauriano@outlook.com.br)  
🌐 GitHub: [github.com/luislauriano](https://github.com/luislauriano)

---

## Documentação 📄
- [Pitch](https://docs.google.com/presentation/d/11cKMmKdL0x_1oxNgFkoqDOUsL4tjD13W0P-9OquYtbs/edit?usp=sharing)
- [Vídeo de Demonstração](https://www.youtube.com/watch?v=vivpIc3Jj4s)


## Instalação ⬇

bash
- git clone https://github.com/Wictor0/vigia-web.git
cd projeto-hacka
- npm install


## Rodando o projeto 🏃
bash
- npm run dev


bash
Usuário cadastrado para teste: gabi@hotmail.com
Senha: gabi123


### Caso precise da chave de API do Supabase para rodar o banco de dados

bash
const supabaseUrl = 'https://ezyrcmwtqkzpyalvdziv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6eXJjbXd0cWt6cHlhbHZkeml2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0Njk5NjgsImV4cCI6MjA2NjA0NTk2OH0.xo8sFUn-KmLBNg8cXf9TSzoHLpxoWPVScd_D5FNnUpE';


## Como contribuir 🤝
### Branches
Pull requests devem ser compostos pelo tipo e nome da branch.\
os nomes das branchs devem ser separados por "-".\
os tipo são compostos por:
- feature - Para novas funcionalidades
- fix - Para bugfixes e hotfixes

Exemplo: 
feature/navbar-mobile

### Commits
Commits devem ser estruturados da seguinte forma <tipo>(<nome-da-branch>): <descrição do commit>\
Exemplo: 
feature(navbar-mobile): adicionando navegação

### Branch padrão
- develop

### Pull requests
Pull requests devem ter uma boa e clara descrição.\
Os 3 principais tópicos da descrição devem ser:
- What I did
- How to test
