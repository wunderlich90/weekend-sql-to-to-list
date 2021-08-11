	--Define columns
	"task" VARCHAR(250),
	"addedBy" VARCHAR(80) not null,
	"dateAdded" date,
	"deadline" date
	);
	

INSERT INTO "tasks"
	("task", "addedBy", "dateAdded", "deadline")
VALUES
	('Clean and charge traps', 'Winston Zedemore', '08-08-2021', '08-14-2021'),
	('Ecto-mobile repairs', 'Ray Stanz', '08-08-2021', '08-13-2021'),
	('Meeting with Dana Barret', 'Peter Venkman', '08-08-2021', '08-12-2021'),
	('Proton pack service', 'Egon Spengler', '08-08-2021', '08-14-2021');