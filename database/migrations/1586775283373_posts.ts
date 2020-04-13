import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Posts extends BaseSchema {
  protected $tableName = "posts";

  public async up() {
    this.schema.createTable(this.$tableName, (table) => {
      table.increments("id");
      table.string("title").nullable();
      table.text("body").nullable();
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.$tableName);
  }
}
