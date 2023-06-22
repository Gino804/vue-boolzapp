const app = Vue.createApp({
  name: "Boolzapp",
  data() {
    return {
      activeContact: {},
      messageText: "",
      searchedText: "",
      clickedMessage: {},
      user: {
        name: "Nome Utente",
        avatar: "_io",
      },
      contacts: [
        {
          id: 1,
          name: "Michele",
          avatar: "_1",
          visible: true,
          messages: [
            {
              id: 1,
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              id: 2,
              date: "10/01/2020 15:50:00",
              message: "Ricordati di stendere i panni",
              status: "sent",
            },
            {
              id: 3,
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          id: 2,
          name: "Fabio",
          avatar: "_2",
          visible: true,
          messages: [
            {
              id: 1,
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              id: 2,
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              id: 3,
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },
        {
          id: 3,
          name: "Samuele",
          avatar: "_3",
          visible: true,
          messages: [
            {
              id: 1,
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              id: 2,
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              id: 3,
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          id: 4,
          name: "Alessandro B.",
          avatar: "_4",
          visible: true,
          messages: [
            {
              id: 1,
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              id: 2,
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
        {
          id: 5,
          name: "Alessandro L.",
          avatar: "_5",
          visible: true,
          messages: [
            {
              id: 1,
              date: "10/01/2020 15:30:55",
              message: "Ricordati di chiamare la nonna",
              status: "sent",
            },
            {
              id: 2,
              date: "10/01/2020 15:50:00",
              message: "Va bene, stasera la sento",
              status: "received",
            },
          ],
        },
        {
          id: 6,
          name: "Claudia",
          avatar: "_6",
          visible: true,
          messages: [
            {
              id: 1,
              date: "10/01/2020 15:30:55",
              message: "Ciao Claudia, hai novità?",
              status: "sent",
            },
            {
              id: 2,
              date: "10/01/2020 15:50:00",
              message: "Non ancora",
              status: "received",
            },
            {
              id: 3,
              date: "10/01/2020 15:51:00",
              message: "Nessuna nuova, buona nuova",
              status: "sent",
            },
          ],
        },
        {
          id: 7,
          name: "Federico",
          avatar: "_7",
          visible: true,
          messages: [
            {
              id: 1,
              date: "10/01/2020 15:30:55",
              message: "Fai gli auguri a Martina che è il suo compleanno!",
              status: "sent",
            },
            {
              id: 2,
              date: "10/01/2020 15:50:00",
              message: "Grazie per avermelo ricordato, le scrivo subito!",
              status: "received",
            },
          ],
        },
        {
          id: 8,
          name: "Davide",
          avatar: "_8",
          visible: true,
          messages: [
            {
              id: 1,
              date: "10/01/2020 15:30:55",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              status: "received",
            },
            {
              id: 2,
              date: "10/01/2020 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: "sent",
            },
            {
              id: 3,
              date: "10/01/2020 15:51:00",
              message: "OK!!",
              status: "received",
            },
          ],
        },
      ],
    };
  },
  computed: {
    // Filtro i contatti tramite il testo nella barra di ricerca
    filteredContacts() {
      const filteredContacts = this.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(this.searchedText.toLowerCase())
      );
      return filteredContacts;
    },
  },
  methods: {
    // Funzione per settare il contatto attivo
    setActiveContact(id) {
      this.contacts.forEach((contact) => {
        if (contact.id === id) this.activeContact = contact;
      });

      // Per fare in modo che, se un messaggio è stato cliccato nella chat precedente, non venga preso nella chat attuale
      this.clickedMessage = {};
    },

    // Funzione per ottenere la data corrente nel giusto formato
    getDate(date) {
      // Salvo in delle variabili tutti i pezzi della data passata come parametro
      let day = date.getDay();
      let month = date.getMonth();
      let year = date.getFullYear();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();

      // Per ogni pezzo della data (tranne l'anno), se è minore di 10, aggiungo uno 0 all'inizio
      if (day < 10) day = `0${day}`;
      if (month < 10) month = `0${month}`;
      if (hours < 10) hours = `0${hours}`;
      if (minutes < 10) minutes = `0${minutes}`;
      if (seconds < 10) seconds = `0${seconds}`;

      // Restituisco una stringa con la data completa
      return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    },

    // Funzione per inviare un messaggio
    sendMessage() {
      // Salvo in delle variabili tutti i pezzi della data attuale
      const date = new Date();

      // Inserisco il nuovo messaggio nell'array dei messaggi
      this.activeContact.messages.push({
        id: date.getTime(),
        date: this.getDate(date),
        message: this.messageText,
        status: "sent",
      });

      // Svuoto il testo del messaggio
      this.messageText = "";

      // Invio la risposta
      this.sendReply();
    },

    // Funzione per inviare la risposta del contatto
    sendReply() {
      // Creo un timeout di un secondo
      setTimeout(() => {
        const date = new Date();

        // Inserisco il nuovo messaggio nell'array dei messaggi
        this.activeContact.messages.push({
          id: date.getTime(),
          date: this.getDate(date),
          message: "Ok",
          status: "received",
        });
      }, 1000);
    },

    // Funzione per rendere un messaggio cliccato
    toggleMessageClicked(id) {
      this.activeContact.messages.forEach((message) => {
        if (message.id === id) {
          if (id === this.clickedMessage.id) this.clickedMessage = {};
          else this.clickedMessage = message;
        }
      });
    },

    // Funzione per eliminare un messaggio
    deleteMessage() {
      this.activeContact.messages = this.activeContact.messages.filter(
        (message) => {
          if (this.clickedMessage.id !== message.id) return message;
        }
      );
    },
  },
  mounted() {
    // All'avvio dell'applicazione, il contatto attivo è di default il primo della lista
    this.activeContact = this.contacts[0];
  },
});

app.mount("#root");
