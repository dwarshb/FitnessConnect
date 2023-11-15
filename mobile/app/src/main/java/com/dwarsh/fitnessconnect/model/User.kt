package com.dwarsh.fitnessconnect.model

data class User(val name: String, val emailId: String? = null, val phoneNumber: String? = null,
    val trainingData: List<TrainingData>, val previousTrainingData: TrainingData)