module.exports = (sequelize, DataTypes) => {
	const Emoji = sequelize.define("Emoji", {
		code: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				len: [1],
			},
		},
		unicode: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				len: [1],
			},
		},
		category: DataTypes.TEXT,
	})

	return Emoji
}
