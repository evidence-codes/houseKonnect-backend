import { timeStamp } from "console";
import { PrimaryKey } from "sequelize-typescript";

const {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  BeforeCreate,
  HasMany,
} = require("sequelize-typescript");

@Table({
  timeStamps: true,
  tableName: "users",
  modelName: "User",
})
class User extends Model {
  @Column({
    PrimaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @Column({
    type: DataType.STRING,
  })
  declare fullname: string;

  @Column({
    type: DataType.STRING,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
  })
  declare password: string;

  @Column({
    type: DataType.STRING,
  })
  declare role: string;

  @Column({
    type: DataType.STRING,
  })
  declare phone: string;

  @Column({
    type: DataType.STRING,
  })
  declare address: string;

  @Column({
    type: DataType.STRING,
  })
  declare dp: string;

  @Column({
    type: DataType.STRING,
  })
  declare slug: string;

  @Column({
    type: DataType.STRING,
    defaultValue: "unverified",
  })
  declare status: string;

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;

  @BeforeCreate
  static async generateSlug(instance: User) {
    const count = await User.count({
      where: {
        name: instance.fullname,
      },
    });
    let suffix = "";
    if (count > 0) {
      suffix = `-${count + 1}`;
    }
    instance.slug = instance.fullname.toLowerCase().replace(" ", "-") + suffix;
  }
}

module.exports = User;
