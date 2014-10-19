module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable(
      'Sessions', {
      sid: {
        type: 'VARCHAR(32)',
        primaryKey: true
      },
      data: DataTypes.TEXT,
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      }
    }, {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    });
    done();
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable('Sessions');
    done();
  }
}
