package com.dwarsh.fitnessconnect.ui.home

import android.net.Uri
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import com.dwarsh.fitnessconnect.UserRepository

class HomeViewModel : ViewModel() {

    private val userRepository = UserRepository()

    //UID
    private val _uid = MutableLiveData<String>().apply {
        value = userRepository.getUID()
    }
    val uid : LiveData<String> = _uid

    //Avatar
    private val _avatar = MutableLiveData<Uri>().apply {
        value = userRepository.getProfilePicture()
    }
    val avatar: LiveData<Uri> = _avatar

    //Greeting
    private val _greet = MutableLiveData<String>().apply {
        value = "Good Morning"
    }
    val greeting : LiveData<String> = _greet

    //Previous Training Text
    private val _previousTrainingText = MutableLiveData<String>().apply {
        value = userRepository.getPreviousTraining()
    }
    val trainingText = _previousTrainingText

    //Previous Training Progress
    private val _previousTrainingProgress = MutableLiveData<String>().apply {
        value = userRepository.getPreviousTrainingProgress()
    }
    val trainingProgress = _previousTrainingProgress
}