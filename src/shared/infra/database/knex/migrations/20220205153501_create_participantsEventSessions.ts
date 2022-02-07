import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("participantsEventSessions", table => {
        table.increments();
        table.string("eventId", 36);
        table.string("sessionId", 36);
        table.string("customerId", 36).notNullable();
        table.string("name");
        table.enum("type", ["companion", "responsible"]);
        table.enum("status", ["inscripted", "cancelled"]);
        table.string("inscriptionCode", 6);
        table.dateTime("createdAt").defaultTo(knex.fn.now()).notNullable();
        table.dateTime("updatedAt").defaultTo(knex.fn.now()).notNullable();;

        table.foreign("eventId").references("id").inTable("events");
        table.foreign("sessionId").references("id").inTable("eventSessions");
        table.unique(["inscriptionCode", "eventId", "sessionId"]);

    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("participantsEventSessions");
}
