import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("customers", table => {
        table.string("id", 36).primary().unique();
        table.string("firstName");
        table.string("lastName");
        table.string("email").unique();
        table.string("cpf", 11).unique();
        table.string("rg", 50);
        table.enum("gender", ["masculino", "feminino", "outros"]);
        table.date("birthDate");
        table.string("phoneNumber", 255);
        table.string("postalCode", 10);
        table.string("country", 255);
        table.string("state", 2);
        table.string("city", 255);
        table.string("publicPlace", 255);
        table.string("number", 50);
        table.string("district", 255);
        table.string("supplement", 255);
        table.dateTime("createdAt").defaultTo(knex.fn.now()).notNullable();
        table.dateTime("updatedAt").defaultTo(knex.fn.now()).notNullable();;
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("customers");
}
