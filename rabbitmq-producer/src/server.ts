import { RabbitMQServer } from './lib/rabbitmq';
(async () => {
  const rabbitMQServer = new RabbitMQServer()

  await rabbitMQServer.start()

  const users = [
    {
      id: 1003915,
      email: 'Karina.Lynch50@yahoo.com-999999',
      name: 'Joe Kutch',
    },
    {
      id: 1003914,
      email: 'Alivia36@hotmail.com-999998',
      name: 'Jackie Mann',
    },
    {
      id: 1003913,
      email: 'Bo_Walker26@gmail.com-999997',
      name: 'Lauren Larson',
    },
    {
      id: 1003912,
      email: 'Aliya_Rowe20@yahoo.com-999996',
      name: 'Karl Hodkiewicz',
    },
    {
      id: 1003911,
      email: 'Ted.Toy49@gmail.com-999995',
      name: 'Rosie Hudson',
    },
    {
      id: 1003910,
      email: 'Fritz.Wuckert@gmail.com-999994',
      name: 'Dewey McDermott',
    },
    {
      id: 1003909,
      email: 'Dwight_Hodkiewicz9@yahoo.com-999993',
      name: 'Miss Rita Cartwright',
    },
    {
      id: 1003908,
      email: 'Helen.Willms@gmail.com-999992',
      name: 'Ms. Marion Zboncak',
    },
    {
      id: 1003907,
      email: 'Luigi.Buckridge58@gmail.com-999991',
      name: 'Sarah Jones',
    },
    {
      id: 1003906,
      email: 'Geovanny41@hotmail.com-999990',
      name: 'Leroy Green',
    },
    {
      id: 1003905,
      email: 'Oswaldo26@gmail.com-999989',
      name: 'Willie Friesen',
    },
    {
      id: 1003904,
      email: 'Melyna_Jacobs63@hotmail.com-999988',
      name: "Levi O'Connell",
    },
    {
      id: 1003903,
      email: 'Patrick.Champlin56@hotmail.com-999987',
      name: 'Mindy Jacobs',
    },
    {
      id: 1003902,
      email: 'Marty_Runolfsdottir@hotmail.com-999986',
      name: 'Mr. Elsie Anderson PhD',
    },
    {
      id: 1003901,
      email: 'Sigmund.Lehner69@yahoo.com-999985',
      name: 'Perry Greenfelder',
    },
    {
      id: 1003900,
      email: 'Cristian64@hotmail.com-999984',
      name: 'Erika Kuhn',
    },
    {
      id: 1003899,
      email: 'Arianna43@yahoo.com-999983',
      name: 'Madeline Terry',
    },
    {
      id: 1003898,
      email: 'Jordyn_Graham@yahoo.com-999982',
      name: 'Mr. Justin Jones',
    },
    {
      id: 1003897,
      email: 'Leora_Koch@yahoo.com-999981',
      name: 'Homer Christiansen',
    },
    {
      id: 1003896,
      email: 'Hester.Quigley@yahoo.com-999980',
      name: 'Monica Bosco',
    },
    {
      id: 1003895,
      email: 'Lorine56@yahoo.com-999979',
      name: 'Dolores Wiza',
    },
    {
      id: 1003894,
      email: 'Deja.OKon@gmail.com-999978',
      name: 'Thelma Dare',
    },
    {
      id: 1003893,
      email: 'Elena_Tremblay@hotmail.com-999977',
      name: 'Sherman Donnelly',
    },
    {
      id: 1003892,
      email: 'Delta27@gmail.com-999976',
      name: 'Wilbert Tillman',
    },
    {
      id: 1003891,
      email: 'Rowland13@gmail.com-999975',
      name: "Claudia D'Amore",
    },
    {
      id: 1003890,
      email: 'Abdiel.Williamson@yahoo.com-999974',
      name: 'Allan Lockman',
    },
    {
      id: 1003889,
      email: 'Chyna.Prosacco51@yahoo.com-999973',
      name: 'Dr. Sophie Zboncak',
    },
    {
      id: 1003888,
      email: 'Ofelia.Dicki22@gmail.com-999972',
      name: 'Maureen Corkery',
    },
    {
      id: 1003887,
      email: 'Vickie_Kilback9@yahoo.com-999971',
      name: 'Mrs. Ben Von',
    },
    {
      id: 1003886,
      email: 'Hilario64@gmail.com-999970',
      name: 'Bobbie Rempel',
    },
    {
      id: 1003885,
      email: 'Marilou_Lockman@yahoo.com-999969',
      name: 'Sylvia Morissette PhD',
    },
    {
      id: 1003884,
      email: 'Ila.Kulas89@yahoo.com-999968',
      name: 'Alexis Krajcik',
    },
    {
      id: 1003883,
      email: 'Delia.Blick40@gmail.com-999967',
      name: 'Alberta Kemmer',
    },
    {
      id: 1003882,
      email: 'Aylin40@hotmail.com-999966',
      name: 'Dr. Wilfred Von',
    },
    {
      id: 1003881,
      email: 'Cassie24@yahoo.com-999965',
      name: 'Melissa Hermann',
    },
    {
      id: 1003880,
      email: 'Angeline_Aufderhar7@gmail.com-999964',
      name: 'Stephanie Swift',
    },
    {
      id: 1003879,
      email: 'Jaren_Hilpert14@yahoo.com-999963',
      name: 'Freda Altenwerth',
    },
    {
      id: 1003878,
      email: 'Kristina.Rogahn19@gmail.com-999962',
      name: 'Mrs. Christy Brakus',
    },
    {
      id: 1003877,
      email: 'Ansley3@hotmail.com-999961',
      name: 'Mr. Jared Huel',
    },
    {
      id: 1003876,
      email: 'Eve_Nitzsche34@hotmail.com-999960',
      name: 'Howard Hyatt',
    },
    {
      id: 1003875,
      email: 'Micaela1@yahoo.com-999959',
      name: 'Javier Kunde',
    },
    {
      id: 1003874,
      email: 'Alfonso.VonRueden@gmail.com-999958',
      name: 'Clayton Schiller III',
    },
    {
      id: 1003873,
      email: 'Jerel.Cremin@hotmail.com-999957',
      name: 'Mr. Casey Jakubowski',
    },
    {
      id: 1003872,
      email: 'Grace_Sauer47@gmail.com-999956',
      name: 'Bonnie Hills',
    },
    {
      id: 1003871,
      email: 'Ebony39@hotmail.com-999955',
      name: 'Leland Hettinger',
    },
    {
      id: 1003870,
      email: 'Irma_Stamm@gmail.com-999954',
      name: 'Brad McLaughlin',
    },
    {
      id: 1003869,
      email: 'Lisa_Hilll52@hotmail.com-999953',
      name: 'Casey Deckow',
    },
    {
      id: 1003868,
      email: 'Abbigail.Herzog@gmail.com-999952',
      name: 'James Durgan II',
    },
    {
      id: 1003867,
      email: 'Florencio94@gmail.com-999951',
      name: 'Daniel Douglas',
    },
    {
      id: 1003866,
      email: 'Clyde.Jacobs@gmail.com-999950',
      name: 'Kenneth Gorczany',
    },
    {
      id: 1003865,
      email: 'Christopher.Bogan52@yahoo.com-999949',
      name: 'Vicky McCullough III',
    },
    {
      id: 1003864,
      email: 'Christa_Lakin@gmail.com-999948',
      name: 'Kim Mosciski',
    },
    {
      id: 1003863,
      email: 'Raquel36@gmail.com-999947',
      name: 'Alberto Reichel',
    },
    {
      id: 1003862,
      email: 'Webster_Keebler11@yahoo.com-999946',
      name: 'Miss Jamie Maggio',
    },
    {
      id: 1003861,
      email: 'Alexandra_Senger@hotmail.com-999945',
      name: 'Ms. Andy MacGyver',
    },
    {
      id: 1003860,
      email: 'Leif.Sawayn80@hotmail.com-999944',
      name: 'Wilbur Beahan',
    },
    {
      id: 1003859,
      email: 'Amparo_OConner38@gmail.com-999943',
      name: 'Dora Bahringer',
    },
    {
      id: 1003858,
      email: 'Gerson.Murazik32@gmail.com-999942',
      name: 'Mr. Floyd Nolan',
    },
    {
      id: 1003857,
      email: 'Alice82@yahoo.com-999941',
      name: 'Todd Nienow',
    },
    {
      id: 1003856,
      email: 'Norval.Flatley34@hotmail.com-999940',
      name: 'Leland Nitzsche',
    },
    {
      id: 1003855,
      email: 'Gino.Rohan39@yahoo.com-999939',
      name: 'Brian Boyle',
    },
    {
      id: 1003854,
      email: 'Ward.Mills@hotmail.com-999938',
      name: 'Clifton Ullrich',
    },
    {
      id: 1003853,
      email: 'Destiny.Luettgen@yahoo.com-999937',
      name: 'Laverne Schmitt PhD',
    },
    {
      id: 1003852,
      email: 'Gerson0@gmail.com-999936',
      name: 'Toby Hauck',
    },
    {
      id: 1003851,
      email: 'Roxanne_Huels71@hotmail.com-999935',
      name: 'David Casper',
    },
    {
      id: 1003850,
      email: 'Rocio.Kuphal54@hotmail.com-999934',
      name: 'Josefina Rutherford',
    },
    {
      id: 1003849,
      email: 'Viola_Prohaska@hotmail.com-999933',
      name: 'Ms. Jeremy Bechtelar',
    },
    {
      id: 1003848,
      email: 'Meta_Effertz54@yahoo.com-999932',
      name: 'Sherry Hand',
    },
    {
      id: 1003847,
      email: 'Kiera70@hotmail.com-999931',
      name: 'Levi Morissette',
    },
    {
      id: 1003846,
      email: 'Rebekah86@yahoo.com-999930',
      name: 'Kara Cummings',
    },
    {
      id: 1003845,
      email: 'Alessandro_Stoltenberg51@gmail.com-999929',
      name: 'Donald Hoppe',
    },
    {
      id: 1003844,
      email: 'Zachariah59@yahoo.com-999928',
      name: 'Aaron Langworth',
    },
    {
      id: 1003843,
      email: 'Tanya.Jones35@gmail.com-999927',
      name: 'Saul Ritchie',
    },
    {
      id: 1003842,
      email: 'Verona.Howe97@gmail.com-999926',
      name: 'Lynn Breitenberg',
    },
    {
      id: 1003841,
      email: 'Cordell30@hotmail.com-999925',
      name: 'Marlon Kovacek',
    },
    {
      id: 1003840,
      email: 'Stefan40@hotmail.com-999924',
      name: 'Debra Kunze',
    },
    {
      id: 1003839,
      email: 'Stephon85@hotmail.com-999923',
      name: 'Tricia Thompson',
    },
    {
      id: 1003838,
      email: 'Mabelle.Green@gmail.com-999922',
      name: 'Israel Feest',
    },
    {
      id: 1003837,
      email: 'Georgette63@gmail.com-999921',
      name: 'Kara Ullrich',
    },
    {
      id: 1003836,
      email: 'Wallace29@yahoo.com-999920',
      name: "Hugh O'Connell",
    },
    {
      id: 1003835,
      email: 'Domenico37@hotmail.com-999919',
      name: 'Edith Ritchie V',
    },
    {
      id: 1003834,
      email: 'Lorenzo.Paucek8@hotmail.com-999918',
      name: 'Terrence Treutel',
    },
    {
      id: 1003833,
      email: 'Mireille_Kris32@gmail.com-999917',
      name: 'Mr. Grant Wehner',
    },
    {
      id: 1003832,
      email: 'Carolanne_Reilly68@gmail.com-999916',
      name: 'Rosalie Goodwin',
    },
    {
      id: 1003831,
      email: 'Mary.Pfannerstill@gmail.com-999915',
      name: 'Eleanor Little',
    },
    {
      id: 1003830,
      email: 'Ada_Stokes@yahoo.com-999914',
      name: "Peter O'Kon DVM",
    },
    {
      id: 1003829,
      email: 'Freddie27@gmail.com-999913',
      name: 'Ashley Davis',
    },
    {
      id: 1003828,
      email: 'Carroll3@yahoo.com-999912',
      name: 'Daryl Crona',
    },
    {
      id: 1003827,
      email: 'Fae_Littel57@hotmail.com-999911',
      name: 'Thomas Rempel',
    },
    {
      id: 1003826,
      email: 'Delia.Quitzon@hotmail.com-999910',
      name: 'Luis Hartmann',
    },
    {
      id: 1003825,
      email: 'Agustin52@gmail.com-999909',
      name: 'Lance Jones',
    },
    {
      id: 1003824,
      email: 'Maxie38@yahoo.com-999908',
      name: 'Loren Murphy',
    },
    {
      id: 1003823,
      email: 'Sanford_Bogan29@gmail.com-999907',
      name: 'Mark Johnston',
    },
    {
      id: 1003822,
      email: 'Jaleel.Shanahan@gmail.com-999906',
      name: 'Patsy Beatty',
    },
    {
      id: 1003821,
      email: 'Arnaldo_Jacobs@gmail.com-999905',
      name: 'Mercedes Hegmann',
    },
    {
      id: 1003820,
      email: 'Arno9@gmail.com-999904',
      name: 'Dominick Kirlin',
    },
    {
      id: 1003819,
      email: 'Cristobal_Rippin@hotmail.com-999903',
      name: 'Stephen Gottlieb',
    },
    {
      id: 1003818,
      email: 'Karlie_Mertz50@yahoo.com-999902',
      name: 'Gloria Metz I',
    },
    {
      id: 1003817,
      email: 'Roosevelt62@yahoo.com-999901',
      name: 'Jenny Auer',
    },
    {
      id: 1003816,
      email: 'Maybell.Barrows@yahoo.com-999900',
      name: 'Tricia Mohr',
    },
  ]

  await rabbitMQServer.publish('test', JSON.stringify(users))
})()
