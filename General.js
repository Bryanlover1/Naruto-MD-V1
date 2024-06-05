



const { Bryan } = require("../framework/Bryan");
const {getAllSudoNumbers,isSudoTableNotEmpty} = require("../bdd/sudo")
const conf = require("../set");

france({ nomCom: "owner", categorie: "General", reaction: "👑" }, async (dest, zk, commandeOptions) => {
    const { ms , mybotpic } = commandeOptions;
    
  const thsudo = await isSudoTableNotEmpty()

  if (thsudo) {
     let msg = `*My Super-User*\n
     *Owner Number*\n :
- 🌟 @${conf.NUMERO_OWNER}

------ *other sudos* -----\n`
     
 let sudos = await getAllSudoNumbers()

   for ( const sudo of sudos) {
    if (sudo) { // Vérification plus stricte pour éliminer les valeurs vides ou indéfinies
      sudonumero = sudo.replace(/[^0-9]/g, '');
      msg += `- ❤️ @${sudonumero}\n`;
    } else {return}

   }   const ownerjid = conf.NUMERO_OWNER.replace(/[^0-9]/g) + "@s.whatsapp.net";
   const mentionedJid = sudos.concat([ownerjid])
   console.log(sudos);
   console.log(mentionedJid)
      zk.sendMessage(
        dest,
        {
          image : { url : mybotpic() },
          caption : msg,
          mentions : mentionedJid
        }
      )
  } else {
    const vcard =
        'BEGIN:VCARD\n' + // metadata of the contact card
        'VERSION:3.0\n' +
        'FN:' + conf.OWNER_NAME + '\n' + // full name
        'ORG:undefined;\n' + // the organization of the contact
        'TEL;type=CELL;type=VOICE;waid=' + conf.NUMERO_OWNER + ':+' + conf.NUMERO_OWNER + '\n' + // WhatsApp ID + phone number
        'END:VCARD';
    zk.sendMessage(dest, {
        contacts: {
            displayName: conf.OWNER_NAME,
            contacts: [{ vcard }],
        },
    },{quoted:ms});
  }
});

france({ nomCom: "developer", categorie: "General", reaction: "🚘" }, async (dest, zk, commandeOptions) => {
    const { ms, mybotpic } = commandeOptions;

    const devs = [
      { nom: "Bryan Tech", numero: "233263176982" },
      { nom: "᚛Bryan Tech᚜", numero: "233538733413" },
      // Ajoute d'autres développeurs ici avec leur nom et numéro
    ];

    let message = "Hey lover ❤️\n *Welcome to Naruto-Md-V1!*\n\n*💠━━💠CREATOR INFO💠━━💠*\n\n\n *◇NAME: _Bryan Tech_*\n*◇AGE: 14*\n*◇LOCATION: _Anime World_*\n*◇BELIEVER: YEESS ✅*\n*◇FRIENDLY: Totally ✅*\n*◇EGOISTIC: _YEEES ✅_*\n*◇FAV MOVIE: _Looks can kill_*\n*◇WA Channel: https://whatsapp.com/channel/0029VacpEdXIt5rqKLB9nC1L\n\n______________________________\n\n*🚖KEEP USING NARUTO-MD-V1 🚖*\n\n\n_The following are my contacts_:\n:";
    for (const dev of devs) {
      message += `----------------\n• ${dev.nom} : https://wa.me/${dev.numero}\n`;
    }
   
  var lien = mybotpic()
    if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption: message }, { quoted: ms });
    }
    catch (e) {
        console.log("🤖🤖 Menu erreur " + e);
        repondre("🤖🤖 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:message }, { quoted: ms });
    }
    catch (e) {
        console.log("🤖🤖 Menu erreur " + e);
        repondre("🤖🤖 Menu erreur " + e);
    }
} 
else {
    repondre(lien)
    repondre("link error");
    
}
});

france({ nomCom: "support", categorie: "General" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, auteurMessage, } = commandeOptions; 
 
  repondre("look on pm sir ")
  await zk.sendMessage(auteurMessage,{text : `https://wa.me/233263176982`},{quoted :ms}) =>
})
 
