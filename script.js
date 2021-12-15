var nomes = [ ' Marrie', ' Galy', ' Ald', ' Cydaric', ' Thaster', ' Jahzara', ' Celestine', ' Ryth', ' Zeve', ' Atlas', ' Lex', ' Ray', ' Kailan', ' Shia', ' Lyle', ' Axe', ' Alastar', ' Dike', ' Visha', ' Kyrell', ' Nymeria', ' Malva', ' Ashly', ' Mika', ' Ezra', ' Arlo', ' Leonel', ' Isleen', ' Aillard', ' Perk', ' Catherine', ' Meliona', ' Ceto', ' Lilura', ' Eirene', ' Weng', ' Remy', ' Asa', ' Finn', ' Rowena', ' Sorrel', ' Willa', ' Rupert', ' Thomé', ' Tamlin', ' Novak', ' Tielo', ' Wilmot', ' Jude', ' Schouth', ' Rhyuu', ' Cybele', ' Galene', ' Yasha', ' Tanith', ' Javaid', ' Kaius', ' Rowen', ' Yseult', ' Lore', ' Eros', ' Darya', ' Lethe', ' Damien', ' Edlyn', ' Nikolau', ' Thalia', ' Verona', ' Dhara', ' Lysandra', ' Odessa', ' Ziva', ' Thea', ' May', ' Eve', ' Aspen', ' Casper', ' Dante', ' Erast', ' Galilea', ' Orion', ' Saros', ' Jett', ' Althea', ' Agnes', ' Cyrus', ' Nicky', ' Theros', ' Estella', ' Rose', ' Magnólia', ' Iris', ' Maia', ' Azalea', ' Daisy', ' Alysson', ' Alaric', ' Corbin', ' Bram', ' Talon' ]

function gerar(){

    const num = document.getElementById("qntd").value;

    numnome = 0
    nomenome = []

    while (numnome < num) {
         const sort = (Math.floor(Math.round(Math.random() * num)));
        nomenome.push(nomes[sort])
        numnome = numnome + 1
        nomes.splice(sort,1)
    } 
    nomes = [ ' Marrie', ' Galy', ' Ald', ' Cydaric', ' Thaster', ' Jahzara', ' Celestine', ' Ryth', ' Zeve', ' Atlas', ' Lex', ' Ray', ' Kailan', ' Shia', ' Lyle', ' Axe', ' Alastar', ' Dike', ' Visha', ' Kyrell', ' Nymeria', ' Malva', ' Ashly', ' Mika', ' Ezra', ' Arlo', ' Leonel', ' Isleen', ' Aillard', ' Perk', ' Catherine', ' Meliona', ' Ceto', ' Lilura', ' Eirene', ' Weng', ' Remy', ' Asa', ' Finn', ' Rowena', ' Sorrel', ' Willa', ' Rupert', ' Thomé', ' Tamlin', ' Novak', ' Tielo', ' Wilmot', ' Jude', ' Schouth', ' Rhyuu', ' Cybele', ' Galene', ' Yasha', ' Tanith', ' Javaid', ' Kaius', ' Rowen', ' Yseult', ' Lore', ' Eros', ' Darya', ' Lethe', ' Damien', ' Edlyn', ' Nikolau', ' Thalia', ' Verona', ' Dhara', ' Lysandra', ' Odessa', ' Ziva', ' Thea', ' May', ' Eve', ' Aspen', ' Casper', ' Dante', ' Erast', ' Galilea', ' Orion', ' Saros', ' Jett', ' Althea', ' Agnes', ' Cyrus', ' Nicky', ' Theros', ' Estella', ' Rose', ' Magnólia', ' Iris', ' Maia', ' Azalea', ' Daisy', ' Alysson', ' Alaric', ' Corbin', ' Bram', ' Talon' ]
    document.getElementById("nomelista").innerHTML=nomenome;
    document.getElementById("nome").innerHTML=sort;
    document.getElementById("listanome").innerHTML=numnome;
    
    
    
    
    
    
}