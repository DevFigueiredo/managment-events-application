import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("events", table => {
        table.string("id", 36).primary().unique();
        table.string("establishmentId").notNullable();
        table.string("name");
        table.dateTime("exhibitionStartDate");
        table.dateTime("exhibitionEndDate");
        table.string("description", 200);
        table.text("formattedDescription");
        table.text("rules");
        table.string("imageUrlThumbnail").nullable();
        table.string("imageUrl").nullable();
        table.string("bannerUrl").notNullable();
        table.string("bannerUrlThumbnail").nullable();
        table.enum("status", ["draft", "published", "canceled", "finished"]).nullable();
        table.dateTime("createdAt").defaultTo(knex.fn.now()).notNullable();
        table.dateTime("updatedAt");
        table.foreign("establishmentId").references("id").inTable("establishment");
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("events");
}
