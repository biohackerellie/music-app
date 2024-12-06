"use client"

import {Pause, Play} from 'lucide-react'
import {useGlobalAudioPlayer} from 'react-use-audio-player'

import type {Type} from "@/types"

import {useCurrentSongIndex, useQueue} from '@/hooks/use-store'

import {cn} from "@/lib/utils"
import {Play}
