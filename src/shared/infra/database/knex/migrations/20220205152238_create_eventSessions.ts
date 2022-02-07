import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("eventSessions", table => {
        table.string("id", 36).primary().unique();
        table.string("eventId").notNullable();
        table.string("name").nullable();
        table.dateTime("sessionStartDate");
        table.dateTime("sessionEndDate");
        table.time("timeToInscription");
        table.enum("status", ["active", "inactive"]);
        table.boolean("registrationRequired");
        table.integer("sessionCapactiytLimit").nullable();
        table.integer("companionLimit").nullable();
        table.dateTime("createdAt").defaultTo(knex.fn.now()).notNullable();
        table.dateTime("updatedAt").defaultTo(knex.fn.now()).notNullable();;
        table.foreign("eventId").references("id").inTable("events");
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("eventSessions");
}
