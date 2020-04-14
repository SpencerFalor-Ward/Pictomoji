

module.exports = (sequelize, DataTypes) => {
	const Question = sequelize.define("Question", {
		questions: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		answers: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		difficulty: {
			type: DataTypes.INTEGER,
			allowNull: false
		},	
    });    

	return Question;
}
