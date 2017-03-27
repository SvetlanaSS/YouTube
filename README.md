# YouTube



### Svetlana Slyusareva, FEND16, kurs Javascript 2



#### Länk till projektet live
Länk till projektet live [här](http://svetlanawebdeveloper.se)



#### Kort beskrivning av applikationen, dess syfte och funktionalitet
Applikationen fungerar som en koppling av de tre riktiga Youtube-kanaler av de svenska blogger - Janni Deler, Ida Warg och Kenza Zouiten.
I applikationen finns det information om deras foto, followers, profile-beskrivningar, en lista över de senaste videon, en lista över playlists,
och kommentarer till deras kanaler. Man kan ladda ner mer video på besökarens begäran.



#### Punktlista med vilka teknologier jag använt
* HTML
* JavaScript
* AJAX
* CSS
* Bootstrap
* jQuery
* Photoshop
* Atom som textredigerare



#### Kort beskrivning av det API/APIer jag använt samt länk till dem
API som använts i projektet är https://developers.google.com/youtube/v3/docs/. Det är YouTubes data-API.
Med YouTubes data-API kunde jag lägga till en mängd olika YouTube-funktioner till min app, såsom:
* från channels - information om en blogger och hennes YouTube-kanal,
* från commentThreads - information om ett YouTube kommentar trä, som består av en kommentar och svar, om det finns några, till den kommentaren,
* från playlistItems - information om en video, som ingår i en spellista,
* från search - här sökte jag information om YouTube-videos.



#### Kortfattat om min arbetsprocess och vad som skulle kodmässigt kunna förbättras
Jag har länge haft idén att koppla några bloggare ihop i en app. Och jag fick en möjlighet :smile:

Jag visste redan vad jag skulle använda för API och vilken funktionalitet jag skulle vilja ha.
Sen började jag projektet med att få API att fungera. Jag skrev funktionerna tillsammans med html för att kunna få se ett resultat.
Började med en responsive menu och design, sen skrev funktionerna för att kunna få se informationen on Janni: foto, namn, followers,
beskrivning. Sen förstod jag att jag har tre bloggers och min kod kommer att upprepas tre gånger. I gjorde en users array och skrev om den funktionen igen.
Jag gjorde också att visa kommentarer för Youtube-kanalen, visa playlists och de sista videon för varje blogger. Det finns en funktion att ladda ner mer video.

Från API fick jag den informationen (funktionalitet):
* Bloggers foto
* Bloggers namn
* Bloggers followers
* Bloggers beskrivning
* Bloggers de sista 5 videon
* Ladda ner 5 video mer
* Bloggers playlists
* Kommentators foto
* Kommentators namn
* Kommentators kommentar

Om jag har mer tid så skulle jag t.ex göra mer med funktionalitet, t.ex. statistiken, sökfält på nånting, att visa video före nåt datum eller efter osv.
