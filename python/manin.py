from embedchain import App
from unrealspeech import UnrealSpeechAPI, play


app = App()
unreal_speech = UnrealSpeechAPI()

app.add('bank-statement-template-07.docx', data_type="docx")
query =app.query('Summarize the document')

audio_data = unreal_speech.speech(text=query,voice_id="Will", bitrate="192k", timestamp_type="sentence", speed=0, pitch=1.0)

# Play audio
play(audio_data)