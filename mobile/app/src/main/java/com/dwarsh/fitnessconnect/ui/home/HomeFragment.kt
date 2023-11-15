package com.dwarsh.fitnessconnect.ui.home

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.ProgressBar
import android.widget.TextView
import androidx.fragment.app.Fragment
import androidx.lifecycle.ViewModelProvider
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide
import com.bumptech.glide.request.RequestOptions
import com.dwarsh.fitnessconnect.databinding.FragmentHomeBinding

class HomeFragment : Fragment() {

    private var _binding: FragmentHomeBinding? = null

    // This property is only valid between onCreateView and
    // onDestroyView.
    private val binding get() = _binding!!

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        val homeViewModel =
            ViewModelProvider(this).get(HomeViewModel::class.java)

        _binding = FragmentHomeBinding.inflate(inflater, container, false)
        val root: View = binding.root

        val userId: TextView = binding.userid
        val greeting : TextView = binding.greeting
        val userAvatar : ImageView = binding.profilePicture
        val previousTrainingText : TextView = binding.previousTrainingText
        val previousTrainingProgress : ProgressBar = binding.progressBar
        val previousTrainingProgressText : TextView = binding.previousTrainingProgressText
        val availableExcerciseRv : RecyclerView = binding.availableProgramRv

        homeViewModel.uid.observe(viewLifecycleOwner) {
            userId.text = it
        }
        homeViewModel.avatar.observe(viewLifecycleOwner) {
            Glide.with(requireContext()).load(it).apply(RequestOptions.circleCropTransform()).into(userAvatar)
        }
        homeViewModel.greeting.observe(viewLifecycleOwner) {
            greeting.text = it
        }
        homeViewModel.trainingText.observe(viewLifecycleOwner) {
            previousTrainingText.text = it
        }
        homeViewModel.trainingProgress.observe(viewLifecycleOwner) {
            previousTrainingProgress.progress = it
            previousTrainingProgressText.text = it
        }
        homeViewModel.excerciseList.observe(viewLifecycleOwner) {
            //set list in adapater
        }

        return root
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}