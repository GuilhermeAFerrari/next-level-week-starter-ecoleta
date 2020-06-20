// Importar a dependencia do sqlite3
const sqlite3 = require('sqlite3').verbose();

// Criar objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database('./src/database/database.db');

module.exports = db;

// Utilizar o objeto de banco de dados para nossas operações
 db.serialize(() => {
//     // Criar uma tabela com comandos SQL
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             name TEXT,
//             image TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `);

//     // Inserir dados na tabela com comandos SQL
//     const query = `
//         INSERT INTO places (
//             name,
//             image,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
//     `;

//     const values = [
//         'Papersider',
//         'https://images.unsplash.com/photo-1528190336454-13cd56b45b5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
//         'Guilherme Gemballa, Jardim América',
//         'Nº 260',
//         'Santa Catarina',
//         'Rio do Sul',
//         'Resíduos Eletrônicos, Lâmpadas'
//     ];

//     function afterInsertData(err) {
//         if(err){
//             return console.log(err);
//         }

//         console.log('Cadastrado com sucesso');
//         console.log(this);
//     }

//      db.run(query, values, afterInsertData);

//     // Consultar dados da tabela com comandos SQL
//     /*db.all(`SELECT * FROM places`, function(err, rows){
//         if(err){
//             return console.log(err);
//         }

//         console.log('Aqui estão seus registros');
//         console.log(rows);
//     });*/

//     // Deletar um dado da tabela com comandos SQL
//     db.run(`DELETE FROM places WHERE id = ?`, [3], function(err){
    //     if(err){
    //            return console.log(err);
    //       }

//        console.log('Registro deleteado com sucesso');
//     });
});