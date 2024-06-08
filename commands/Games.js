/** 

🇫‌🇱‌🇦‌🇸‌🇭‌-🇲‌🇩‌ 

  𝗖𝗼𝗽𝘆𝗿𝗶𝗴𝗵𝘁 (𝗖) 2024.
 𝗟𝗶𝗰𝗲𝗻𝘀𝗲𝗱 𝘂𝗻𝗱𝗲𝗿 𝘁𝗵𝗲  𝗠𝗜𝗧 𝗟𝗶𝗰𝗲𝗻𝘀𝗲;
 𝗬𝗼𝘂 𝗺𝗮𝘆 𝗻𝗼𝘁 𝘂𝘀𝗲 𝘁𝗵𝗶𝘀 𝗳𝗶𝗹𝗲 𝗲𝘅𝗰𝗲𝗽𝘁 𝗶𝗻 𝗰𝗼𝗺𝗽𝗹𝗶𝗮𝗻𝗰𝗲 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗟𝗶𝗰𝗲𝗻𝘀𝗲.
 𝗜𝘁 𝗶𝘀 𝘀𝘂𝗽𝗽𝗹𝗶𝗲𝗱 𝗶𝗻 𝘁𝗵𝗲 𝗵𝗼𝗽𝗲 𝘁𝗵𝗮𝘁 𝗶𝘁 𝗺𝗮𝘆 𝗯𝗲 𝘂𝘀𝗲𝗳𝘂𝗹.
 * @𝗽𝗿𝗼𝗷𝗲𝗰𝘁_𝗻𝗮𝗺𝗲 : 𝗙𝗹𝗮𝘀𝗵 𝗠𝗗, 𝗮 𝘀𝗶𝗺𝗽𝗹𝗲 𝗮𝗻𝗱 𝗲𝗮𝘀𝘆 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 𝘂𝘀𝗲𝗿 𝗯𝗼𝘁 
 * @𝗼𝘄𝗻𝗲𝗿: 𝗙𝗿𝗮𝗻𝗰𝗲 𝗞𝗶𝗻𝗴 
 
 **/






const {france} = require("../framework/france");
const axios = require('axios');
const traduire = require('../framework/traduction')



france({
    nomCom: "chifumi",
    categorie: "Games",
    reaction: "📺"
  },
  async (origineMessage, zk, commandeOptions) => {
    const { repondre, ms, auteurMessage, auteurMsgRepondu, msgRepondu , arg , idBot } = commandeOptions;

    if (msgRepondu) {
        zk.sendMessage(origineMessage, {
            text: `@${auteurMessage.split('@')[0]} invites @${auteurMsgRepondu.split('@')[0]} to play the rock-paper-scissors game;
        To accept the challenge, type yes`,
            mentions: [auteurMessage, auteurMsgRepondu]
        });

        try {
            const repinv = await zk.awaitForMessage({
                sender: auteurMsgRepondu,
                chatJid: origineMessage,
                timeout: 30000 // 30 secondes
            });
   console.log(repinv) ;

            if (repinv.message.conversation.toLowerCase() === 'yes' || repinv.message.extendedTextMessage.text.toLowerCase() === 'yes' ) {

              let msg1 = `*player 1 :* @${auteurMsgRepondu.split('@')[0]}
*player 2 :* @${auteurMessage.split('@')[0]}

*Rules:* The game will start soon; you have a maximum of 1 minute each to make a choice in our private chat;`
                
      zk.sendMessage(origineMessage,{text : msg1,mentions : [auteurMessage, auteurMsgRepondu]} ) ;

      let msg2 = `You have 3 choices;

      rock
      paper
      scissors
   
   Please send your choice`
 let players = [auteurMessage,auteurMsgRepondu] ;
let choix = [] ;

 try {
  
        for (const player of players) {
        
         zk.sendMessage(origineMessage,{ text : `@${player.split("@")[0]} Please go to this chat to make a choice
         https://wa.me/${idBot.split('@')[0]} ` , mentions : [player]})
            zk.sendMessage(player,{text : msg2}) ;
             
          const msgrecu =  await zk.awaitForMessage({
                sender: player,
                chatJid: player,
                timeout: 30000 // 30 secondes
            });
           console.log('voici le message de' + ' ' + player)
     console.log(msgrecu)

            choix.push(msgrecu.message.extendedTextMessage.text.toLowerCase()) ;
         
        }

        console.log(choix)
  const choixPossibles = ["rock", "paper", "scissors"];    
  
  const choixJoueur1 = choix[0] ;
const choixJoueur2 = choix[1] ;


if (!choixPossibles.includes(choixJoueur1) || !choixPossibles.includes(choixJoueur2)) {
    // Gérez le cas où les choix ne sont pas valides
    zk.sendMessage(origineMessage,{ text : `*joueur 1 :* @${auteurMsgRepondu.split('@')[0]}
*joueur 2 :* @${auteurMessage.split('@')[0]}

*resultat :* l'un ou les deux choix ne sont pas valides.`, mentions : [auteurMessage, auteurMsgRepondu] });

} else if (choixJoueur1 === choixJoueur2) {
    // C'est une égalité
    zk.sendMessage(origineMessage,{ text : `*joueur 1 :* @${auteurMsgRepondu.split('@')[0]} a choisi(e) *${choixJoueur2}* 
*joueur 2 :* @${auteurMessage.split('@')[0]} a choisi(e) *${choixJoueur1}*

resultat : il y'a donc match nul` , mentions : [auteurMessage, auteurMsgRepondu] });
} else if (
    (choixJoueur1 === "rock" && choixJoueur2 === "scissors") ||
    (choixJoueur1 === "paper" && choixJoueur2 === "rock") ||
    (choixJoueur1 === "scissors" && choixJoueur2 === "paper")
) {
    // Joueur 1 gagne
    zk.sendMessage(origineMessage,{ text : `*player 1 :* @${auteurMsgRepondu.split('@')[0]} choose *${choixJoueur2}* 
*player 2 :* @${auteurMessage.split('@')[0]} choose *${choixJoueur1}*

*result :* @${auteurMessage.split('@')[0]} win ` ,mentions : [auteurMessage, auteurMsgRepondu] });
} else {
    // Joueur 2 gagne
    zk.sendMessage(origineMessage,{ text : `*player 1 :* @${auteurMsgRepondu.split('@')[0]} choose *${choixJoueur2}* 
*player 2 :* @${auteurMessage.split('@')[0]} choose) *${choixJoueur1}*

*result :* @${auteurMsgRepondu.split('@')[0]} win ` , mentions : [auteurMessage, auteurMsgRepondu] });
}

           } catch (error) {
            if (error.message === 'Timeout') {
                // Le temps d'attente est écoulé
                zk.sendMessage(origineMessage,{ text : `*player 1 :* @${auteurMsgRepondu.split('@')[0]}
*player 2 :* @${auteurMessage.split('@')[0]}

*result :* Our players took too long to decide;
Therefore, the game is canceled
` , mentions : [auteurMessage, auteurMsgRepondu]});
            } else {
                // Gérez d'autres erreurs ici si nécessaire
                console.error(error);
            }
           }
        
           } else {
                repondre('invitation refused') ;
            }
            

      } catch (error) {
            if (error.message === 'Timeout') {
                // Le temps d'attente est écoulé
                zk.sendMessage(origineMessage,{ text : `@${auteurMsgRepondu.split('@')[0]} took too long to respond to the invitation from
                @${auteurMessage.split('@')[0]} ;
Therefore, the game is canceled`, mentions : [auteurMessage, auteurMsgRepondu]});
            } else {
                // Gérez d'autres erreurs ici si nécessaire
                console.error(error);
            }
        }
    } else {
        repondre('Chifumi  is an rock-paper-scissors games ; you need a friend too play , mention his/her message when sending chifumi to invite him/her') ;
    }
});


france(
    { nomCom: "quizz", categorie: "Games", reaction: "👨🏿‍💻" },
    async (origineMessage, zk, commandeOptions) => {
        const { repondre, auteurMessage } = commandeOptions;

        try {
         let quizz = await axios.get("https://quizzapi.jomoreschi.fr/api/v1/quiz?limit=1&difficulty=facile") ;

         
   let msg = `     Flash-Md-Quizz-Games

*Category :* ${ await traduire(quizz.data.quizzes[0].category , {to : 'en'})}
*Question :* ${ await traduire(quizz.data.quizzes[0].question, {to : 'en'})}\n\n*Answers :*\n`
    
let Answers =[] ;
       for (const reponse of quizz.data.quizzes[0].badAnswers) {
        
         Answers.push(reponse)
     
       } ;

       Answers.push(quizz.data.quizzes[0].answer) ;
    
      async function shuffleArray(array) {
        const shuffledArray = array.slice(); // Copie du tableau d'origine
      
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
      
        return shuffledArray;
      } ;
 
 let choix = await shuffleArray(Answers) ;

 for (let i = 0; i < choix.length; i++) {
    msg += `*${i + 1} :* ${choix[i]}\n`;
}


     msg+= `
Send the number off right answers`
             
       repondre(msg) ;

       let rep = await  zk.awaitForMessage({
        sender: auteurMessage,
        chatJid : origineMessage,
        timeout: 15000 // 30 secondes
    });
   let repse ;  
    try {
        repse = rep.message.extendedTextMessage.text
    } catch {
        repse = rep.message.conversation
    } ;

    if (choix[repse - 1 ] == quizz.data.quizzes[0].answer ) {

        repondre("Great , good answer ;")
    } else {

        repondre("bad answer")
    }

        } catch (error) {
            console.log(error);
        }
    }
);
