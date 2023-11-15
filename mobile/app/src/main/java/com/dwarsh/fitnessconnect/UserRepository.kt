package com.dwarsh.fitnessconnect

import android.net.Uri
import android.util.Log
import androidx.lifecycle.MutableLiveData
import com.google.firebase.auth.FirebaseUser
import com.google.firebase.database.ChildEventListener
import com.google.firebase.database.DataSnapshot
import com.google.firebase.database.DatabaseError
import com.google.firebase.database.FirebaseDatabase

class UserRepository {

    private val user : MutableLiveData<FirebaseUser> = MutableLiveData()
    private var previousTrainingText = ""
    private var previousTrainingProgress = 0

    init {
        getCurrentUserData()
    }

    fun getUID(): String? {
        return user.value?.uid
    }

    fun getName(): String? {
        return user.value?.displayName
    }

    fun getPhoneNumber(): String? {
        return user.value?.phoneNumber
    }

    fun getProfilePicture(): Uri? {
        return user.value?.photoUrl
    }

    fun getUser() : FirebaseUser? {
        return user.value
    }

    fun getPreviousTraining() : String {
        return previousTrainingText
    }

    fun getPreviousTrainingProgress(): Int {
        return previousTrainingProgress
    }

    private fun getCurrentUserData() {
        val currentUsertrainingData = FirebaseDatabase.getInstance().reference
            .child("Users").child(getUID().toString())
        currentUsertrainingData.addChildEventListener(object : ChildEventListener{
            override fun onChildAdded(snapshot: DataSnapshot, previousChildName: String?) {

            }

            override fun onChildChanged(snapshot: DataSnapshot, previousChildName: String?) {
                TODO("Not yet implemented")
            }

            override fun onChildMoved(snapshot: DataSnapshot, previousChildName: String?) {
                TODO("Not yet implemented")
            }

            override fun onChildRemoved(snapshot: DataSnapshot) {
                TODO("Not yet implemented")
            }
            override fun onCancelled(error: DatabaseError) {
                TODO("Not yet implemented")
            }
        })
    }
}