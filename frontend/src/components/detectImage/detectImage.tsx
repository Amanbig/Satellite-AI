"use client";

import { Loader2, Upload } from "lucide-react";
import { Button } from "../ui/button";
import { FileUpload } from "../ui/file-upload";
import { useState } from 'react';
import Image from "next/image";
import { Alert, AlertDescription } from '@/components/ui/alert';

interface PredictionResult {
  prediction: string;
}

export function DetectImage() {
    const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (files: File[]) => {
    const file = files[0];
    if (file) {
      setFile(file);
      setPreview(URL.createObjectURL(file));
      setPrediction(null);
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/detect', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
      setPrediction(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to detect');
    } finally {
      setLoading(false);
    }
  };

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col items-center gap-4">
            {preview && (
              <div className="relative w-64 h-64">
                <Image
                  src={preview}
                  alt="Preview"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}
            <FileUpload onChange={handleFileChange}/>
            <Button
              type="submit"
              disabled={!file || loading}
              className="w-full max-w-xs"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Upload className="mr-2 h-4 w-4" />
                  Detect
                </>
              )}
            </Button>
          </div>
        </form>

        {error && (
          <Alert variant="destructive" className="mt-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {prediction && (
          <div className="mt-6 space-y-4">
            <h3 className="text-lg font-semibold text-center">
              Type of Area Detected
            </h3>
            <div className="text-center">
              <p className="text-xl font-bold text-green-600">
                {prediction.prediction.toUpperCase()}
              </p>
            </div>
          </div>
        )}
        </div>
    )
}